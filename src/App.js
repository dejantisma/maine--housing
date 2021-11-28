import logo from './logo.svg';
import './App.css';
import { readString } from 'react-papaparse'
import data from './data.js';


// const fs = require('fs');
// const csv = require('@fast-csv/parse');



function App() {

// const stream = fetch('data.csv');
// var dataArr = [];

// csv.parseStream(stream, { headers: true })
//     .on('error', error => console.error(error))
//     .on('data', row => {
//         dataArr.push(row);

//     })
//     .on('end', data => {
//         //console.log('Array has '+dataArr.length+' elements');
//         analyze(dataArr);
//     });

// var csvString = `Region,Month of Period End,Property Type,Region Type,Seasonally Adjusted,State Code,Avg Sale To List,Avg Sale To List Mom,Avg Sale To List Yoy,Homes Sold,Homes Sold Mom,Homes Sold Yoy,Inventory,Inventory Mom,Inventory Yoy,Median Dom,Median Dom Mom,Median Dom Yoy,Median Sale Price,Median Sale Price Mom,Median Sale Price Yoy,New Listings,New Listings Mom,New Listings Yoy
// "Portland, ME metro area",October 2020,All Residential,Metro,False,ME,1.012957040,-0.1%,2.6%,1079,1.2%,21.6%,1217,-1.5%,-44.2%,10,-1,-14,$370K,5.7%,26.2%,1027,-3.7%,26.2%`
var csvString = fetch('/data.csv').then(str => str.text()).then(text=>console.log(text));
readString(data, {
  worker: true,
  header: true,
  complete: (results) => {
    console.log(results)
  }
})


const analyze = (data) => {
   // console.log(arr[0]);
    var result = data.filter(data =>{
        return data['Month of Period End'] === 'October 2021';
    })

    console.log(result);

}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
