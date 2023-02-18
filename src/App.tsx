import React from 'react';
import './App.css';
import { TableBody } from './components/TableBody';
import { TableHeader } from './components/TableHeader';
import { tableBody } from './data/tableBody';
import { tableHeader } from './data/tableHeader';

function App() {
  return (
    <div className="App">
      <table className="responsive-table">
        <TableHeader header={tableHeader}/>
        {tableBody.map((body,index) => <TableBody body={body} header={tableHeader} key={index}/>)}
        <TableBody body={tableBody[0]} header={tableHeader}/>
      </table>  
    </div>
  );
}

export default App;
