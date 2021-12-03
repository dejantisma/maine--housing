import logo from './logo.svg';
import './App.css';
import { readString } from 'react-papaparse'
import redfin from './data.js';
import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Container } from "react-bootstrap";
import Emoji from './emoji'
import 'bootstrap/dist/css/bootstrap.min.css';


const name = <Emoji symbol="🏡" />;

function App() {

  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [neighborhood1, setNeighborhood1] = useState('');
  const [neighborhood2, setNeighborhood2] = useState('');
  const [neighborhoodButtonTitle, setneighborhoodButtonTitle] = useState('Neighborhood 1');
  const [neighborhoodButtonTitle2, setneighborhoodButtonTitle2] = useState('Neighborhood 2');

  useEffect(() => {

    readString(redfin, {
      worker: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        setRegions(results.data.map(item => item.Region).filter((value, index, self)=> self.indexOf(value) === index).sort());
      }
    })

  }, [data]);


  const getNeighborhoodData = (neighborhood) =>{

    console.log(neighborhood);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood);
    console.log(neighborhoodArr);
    setneighborhoodButtonTitle(neighborhood);

  }

  

  const getNeighborhoodData2 = (neighborhood) =>{

    console.log(neighborhood);
    var neighborhoodArr = data.filter(item => item.Region === neighborhood);
    console.log(neighborhoodArr);
    setneighborhoodButtonTitle2(neighborhood);

  }



  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontSize: 72 }}>{name}</h1>
<Container>
<Row>
  <Col>
      <Dropdown onSelect={(e,data) => getNeighborhoodData(data.target.innerText)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {neighborhoodButtonTitle}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {regions?.map(obj=>{
            return <Dropdown.Item>{obj}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
      </Col>
      <Col>
      <Dropdown onSelect={(e,data) => getNeighborhoodData2(data.target.innerText)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {neighborhoodButtonTitle2}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {regions?.map(obj=>{
            return <Dropdown.Item>{obj}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
      </Col>
</Row>
</Container>
    </div>
  );
}

export default App;
