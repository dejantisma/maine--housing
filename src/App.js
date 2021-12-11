
import './App.css';
import { readString } from 'react-papaparse'
import redfin from './data.js';
import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Container, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
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
  const [neighborhood1, setNeighborhood1] = useState();
  const [neighborhood2, setNeighborhood2] = useState();
  const [neighborhoodButtonTitle, setneighborhoodButtonTitle] = useState('Neighborhood 1');
  const [neighborhoodButtonTitle2, setneighborhoodButtonTitle2] = useState('Neighborhood 2');
  const [neighborhood1Selected, setNeighborhood1Selected] = useState(false);
  const [neighborhood2Selected, setNeighborhood2Selected] = useState(false);
  const [metricSelected, setMetricSelected] = useState(false);
  const [allSelected, setAllSelected] = useState(neighborhood1Selected && neighborhood2Selected && metricSelected);



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
    if (!(typeof neighborhood1 === 'undefined' || neighborhood1 === null)) {
      getNeighborhoodData(neighborhood1.Region, date);
    }
  }

  const onNeighborhood2DateChange = (date) => {
    setDate2(date);
    if (!(typeof neighborhood2 === 'undefined' || neighborhood2 === null)) {
      getNeighborhoodData2(neighborhood2.Region, date);
    }

  }

  const getNeighborhoodData = (neighborhood, date) => {
    setNeighborhood1Selected(true);
    setAllSelected(true && neighborhood2Selected && metricSelected);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood && item["Month of Period End"] === date.toLocaleString('default', { month: 'long', year: 'numeric' }));
    console.log(neighborhoodArr);
    if (neighborhoodArr.length > 0)
      setNeighborhood1(neighborhoodArr[0]);
  }

  const getNeighborhoodData2 = (neighborhood, date) => {
    setNeighborhood2Selected(true);
    setAllSelected(neighborhood1Selected && true && metricSelected);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood && item["Month of Period End"] === date.toLocaleString('default', { month: 'long', year: 'numeric' }));
    console.log(neighborhoodArr);
    if (neighborhoodArr.length > 0)
      setNeighborhood2(neighborhoodArr[0]);
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


          {((typeof neighborhood1 === 'undefined' || neighborhood1 === null)) ?


            <Alert variant="warning">
              Choose a neighborhood from the first dropdown!
            </Alert>


            : ''}

          {


            ((typeof neighborhood2 === 'undefined' || neighborhood2 === null)) ?

              <Alert variant="warning">
                Choose a neighborhood from the second dropdown!
              </Alert> : ''



          }

          {


            ((typeof metric === 'undefined' || metric === null)) ?

              <Alert variant="warning">
                Choose a metric from the second dropdown!
              </Alert> : ''



          }

          {allSelected ? 
          <div>
          <h3>{neighborhood1?.Region + ' had ' + neighborhood1?.["Homes Sold"] + ' homes sold in ' + neighborhood1?.["Month of Period End"]}</h3>
          <h3>{neighborhood2?.Region + ' had ' + neighborhood2?.["Homes Sold"] + ' homes sold in ' + neighborhood2?.["Month of Period End"]}</h3>
          </div>
          
          
          : ''
          
        }



        </Row>
      </Container>
    </div>
  );
}

export default App;
