import logo from './logo.svg';
import './App.css';
import { readString } from 'react-papaparse'
import redfin from './data.js';
import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Container } from "react-bootstrap";
import Emoji from './emoji'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-date-picker';




const name = <Emoji symbol="🏡" />;

function App() {

  const [date1, setDate1] = useState(new Date(2021, 9));
  const [date2, setDate2] = useState(new Date(2021, 10));
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [neighborhood1, setNeighborhood1] = useState([]);
  const [neighborhood2, setNeighborhood2] = useState([]);
  const [neighborhoodButtonTitle, setneighborhoodButtonTitle] = useState('Neighborhood 1');
  const [neighborhoodButtonTitle2, setneighborhoodButtonTitle2] = useState('Neighborhood 2');

  useEffect(() => {

    readString(redfin, {
      worker: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        setRegions(results.data.map(item => item.Region).filter((value, index, self) => self.indexOf(value) === index).sort());
      }
    })

  }, [data]);


  const onNeighborhood1DateChange = (date) => {
    setDate1(date);
  }

  const onNeighborhood2DateChange = (date) => {
    setDate2(date);
  }

  const getNeighborhoodData = (neighborhood) => {

    // console.log(neighborhood);[65]
    var neighborhoodArr = data.filter(item => item.Region === neighborhood && item["Month of Period End"] === date1.toLocaleString('default', { month: 'long', year: 'numeric' }));
    console.log(neighborhoodArr);
    //   console.log(date1.toLocaleString('default',{month: 'long', year: 'numeric'}));
    setneighborhoodButtonTitle(neighborhood);
    setNeighborhood1(neighborhoodArr[0]);
    // console.log(value1);
    // console.log(value2);

  }



  const getNeighborhoodData2 = (neighborhood) => {

    //  console.log(neighborhood);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood && item["Month of Period End"] === date2.toLocaleString('default', { month: 'long', year: 'numeric' }));
    console.log(neighborhoodArr);
    setneighborhoodButtonTitle2(neighborhood);
    setNeighborhood2(neighborhoodArr[0]);


  }



  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontSize: 72 }}>{name}</h1>
      <Container>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Dropdown onSelect={(e, data) => getNeighborhoodData(data.target.innerText)}>
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

          <Col />
          <Col>
            <Dropdown onSelect={(e, data) => getNeighborhoodData2(data.target.innerText)}>
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
        </Row>

        <Row>
<h3>{neighborhood1?.Region+' had '+neighborhood1?.["Homes Sold"]+ ' homes sold in '+neighborhood1?.["Month of Period End"]}</h3>
        </Row>
      </Container>
    </div>
  );
}

export default App;
