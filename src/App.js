
import './App.css';
import { readString } from 'react-papaparse'
import redfin from './data.js';
import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Container, OverlayTrigger, Tooltip, Alert, Button, Modal, ProgressBar } from "react-bootstrap";
import Emoji from './emoji'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-date-picker';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const name = <Emoji symbol="🏡" />;

function App() {

  const [date1, setDate1] = useState(new Date(2021, 8));
  const [date2, setDate2] = useState(new Date(2021, 9));
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [statisticButtonTitle, setStatisticButtonTitle] = useState('Metric');
  const [metric, setMetric] = useState();
  const [headers, setHeaders] = useState([]);
  const [neighborhood1, setNeighborhood1] = useState([]);
  const [neighborhood2, setNeighborhood2] = useState([]);
  const [neighborhoodButtonTitle, setneighborhoodButtonTitle] = useState('Neighborhood 1');
  const [neighborhoodButtonTitle2, setneighborhoodButtonTitle2] = useState('Neighborhood 2');
  const [neighborhood1Selected, setNeighborhood1Selected] = useState(false);
  const [neighborhood2Selected, setNeighborhood2Selected] = useState(false);
  const [metricSelected, setMetricSelected] = useState(false);
  const [allSelected, setAllSelected] = useState(neighborhood1Selected && neighborhood2Selected && metricSelected);
  const [dateSuggestion, setDateSuggestion] = useState('');

  //modal vars
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



  useEffect(() => {

    readString(redfin, {
      worker: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        setHeaders(results.meta.fields);
        setRegions(results.data.map(item => item.Region).filter((value, index, self) => self.indexOf(value) === index).sort());
      }
    })

  }, [data]);


  const onNeighborhood1DateChange = (date) => {
    setDate1(date);
    console.log('setting date 1 change');
    console.log(neighborhood1);
    if (!(typeof neighborhood1 === 'undefined' || neighborhood1 === null)) {
      console.log('calling neighborhood data..');
      getNeighborhoodData(neighborhood1.Region, date);
    }
  }

  const onNeighborhood2DateChange = (date) => {
    setDate2(date);
    //  if (!(typeof neighborhood2 === 'undefined' || neighborhood2 === null)) {
    getNeighborhoodData2(neighborhood2.Region, date);
    //  }

  }

  const getNeighborhoodData = (neighborhood, date) => {
    console.log('getting neighborhood data for ' + date);
    setNeighborhood1Selected(true);
    setAllSelected(true && neighborhood2Selected && metricSelected);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood && item["Month of Period End"] === date.toLocaleString('default', { month: 'long', year: 'numeric' }));
    console.log(neighborhoodArr);
    if (neighborhoodArr.length <= 0) {
      handleShow();
    }
    else { // (neighborhoodArr.length > 0)
      setNeighborhood1(neighborhoodArr[0]);
      console.log(neighborhoodArr[0]);
    }
  }

  const getNeighborhoodData2 = (neighborhood, date) => {
    setNeighborhood2Selected(true);
    setAllSelected(neighborhood1Selected && true && metricSelected);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood && item["Month of Period End"] === date.toLocaleString('default', { month: 'long', year: 'numeric' }));
    console.log(neighborhoodArr);
    if (neighborhoodArr.length <= 0) {
      handleShow2();
    }


    else {
      setNeighborhood2(neighborhoodArr[0]);
      console.log(neighborhoodArr[0]);
    }
  }


  const getAvailableDates = (neighborhood) => {
    return data.filter(item => item.Region === neighborhood).map(item => item['Month of Period End']).filter((value, index, self) => self.indexOf(value) === index) //get all neighborhoods with that neighborhood then get all unique dates
  }

  const getClosestDate = (neighborhood, date) => {
    var dates = getAvailableDates(neighborhood);
    dates.push(date); //add new date
    dates.sort(function (a, b) {
      return new Date(a) - new Date(b);
    });

    var i = dates.indexOf(date);
    return dates.length > 1 ? i === 0 ? dates[i + 1] : dates[i - 1] : null; //return close date

  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontSize: 72 }}>{name}</h1>
      <Container>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Dropdown onSelect={(e, data) => {
              setneighborhoodButtonTitle(data.target.innerText);
              getNeighborhoodData(data.target.innerText, date1)
            }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {neighborhoodButtonTitle}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {regions?.map(obj => {
                  return <Dropdown.Item>{obj}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
            <DatePicker
              onChange={onNeighborhood1DateChange}
              value={date1}
            />
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Dropdown onSelect={(e, data) => {
              setneighborhoodButtonTitle2(data.target.innerText);
              getNeighborhoodData2(data.target.innerText, date2)
            }}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {neighborhoodButtonTitle2}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {regions?.map(obj => {
                  return <Dropdown.Item>{obj}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
            <DatePicker
              onChange={onNeighborhood2DateChange}
              value={date2}
            />
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <Dropdown onSelect={(e, data) => {
              setStatisticButtonTitle(data.target.innerText);
              setMetric(data.target.innerText);
              setMetricSelected(true);
              setAllSelected(neighborhood1Selected && neighborhood2Selected && true);
            }}>
              <OverlayTrigger
                placement='right'
                overlay={
                  <Tooltip id={`tooltip-right}`}>
                    <strong>Mom</strong> = Month over month <strong>Yoy</strong> = Year over year
                  </Tooltip>
                }>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {statisticButtonTitle}
                </Dropdown.Toggle>
              </OverlayTrigger>
              <Dropdown.Menu>
                {headers?.slice(6).map(obj => {
                  return <Dropdown.Item>{obj}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <br />
        <Row>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>🙁</Modal.Title>
            </Modal.Header>
            <Modal.Body>No housing data available for {neighborhoodButtonTitle} during <i>{date1.toLocaleString('default', { month: 'long', year: 'numeric' })}</i>. </Modal.Body>
            <Modal.Body>There is data for month of period end <i>{getClosestDate(neighborhoodButtonTitle, date1.toLocaleString('default', { month: 'long', year: 'numeric' }))}</i>. Change to this month?

            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {
                handleClose();
                onNeighborhood1DateChange(new Date(getClosestDate(neighborhoodButtonTitle, date1.toLocaleString('default', { month: 'long', year: 'numeric' }))));
              }}>
                Change date
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>🙁</Modal.Title>
            </Modal.Header>
            <Modal.Body>No housing data available for {neighborhoodButtonTitle2} during <i>{date2.toLocaleString('default', { month: 'long', year: 'numeric' })}</i>. </Modal.Body>
            <Modal.Body>There is data for month of period end <i>{getClosestDate(neighborhoodButtonTitle2, date2.toLocaleString('default', { month: 'long', year: 'numeric' }))}</i>. Change to this month?

            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {
                handleClose2();
                onNeighborhood2DateChange(new Date(getClosestDate(neighborhoodButtonTitle2, date2.toLocaleString('default', { month: 'long', year: 'numeric' }))));
              }}>
                Change date
              </Button>
            </Modal.Footer>
          </Modal>


          {((typeof neighborhood1 === 'undefined' || neighborhood1 === null || neighborhood1.length === 0)) ?


            <Alert variant="warning">
              Choose a neighborhood from the first dropdown!
            </Alert>


            : ''}

          {


            ((typeof neighborhood2 === 'undefined' || neighborhood2 === null || neighborhood2.length === 0)) ?

              <Alert variant="warning">
                Choose a neighborhood from the second dropdown!
              </Alert> : ''



          }

          {


            ((typeof metric === 'undefined' || metric === null)) ?

              <Alert variant="warning">
                Choose a metric from the third dropdown!
              </Alert> : ''



          }

          {allSelected ?

            <div>
              <br />
              <h3 style={{ textAlign: 'center' }}>{neighborhood1?.Region + ' had a value of ' + neighborhood1?.[`${metric}`] + ` ${metric} during ` + neighborhood1?.["Month of Period End"]}</h3>
              <h3 style={{ textAlign: 'center' }}>{neighborhood2?.Region + ' had a value of ' + neighborhood2?.[`${metric}`] + ` ${metric} during ` + neighborhood2?.["Month of Period End"]}</h3>
              <br />

              <ProgressBar>
                <ProgressBar variant="success" label={neighborhood1?.Region} now={100*parseInt(neighborhood1?.[`${metric}`])/(parseInt(neighborhood1?.[`${metric}`])+parseInt(neighborhood2?.[`${metric}`]))} key={1} />
                <ProgressBar variant="danger" label={neighborhood2?.Region} now={100*parseInt(neighborhood2?.[`${metric}`])/(parseInt(neighborhood1?.[`${metric}`])+parseInt(neighborhood2?.[`${metric}`]))} key={2} />
              </ProgressBar>

            </div>


            : ''

          }



        </Row>
      </Container>
    </div>
  );
}

export default App;
