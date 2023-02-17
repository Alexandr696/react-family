import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table className="responsive-table">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                    <th>Column 5</th>
                    <th>Column 6</th>
                    <th>Column 7</th>
                    <th>Column 8</th>
                    <th>Column 9</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Column 1">Data 1Data 1Data 1Data 1</td>
                    <td data-label="Column 2">Data 2</td>
                    <td data-label="Column 3">Data 3</td>
                    <td data-label="Column 4">Data 4</td>
                    <td data-label="Column 5">Data 5</td>
                    <td data-label="Column 6">Data 6</td>
                    <td data-label="Column 7">Data 7</td>
                    <td data-label="Column 8">Data 8</td>
                    <td data-label="Column 9">Data 9</td>
                </tr>
                <tr>
                    <td data-label="Column 1">Data 10Data 10Data 10Data 10</td>
                    <td data-label="Column 2">Data 11</td>
                    <td data-label="Column 3">Data 12</td>
                    <td data-label="Column 4">Data 13</td>
                    <td data-label="Column 5">Data 14</td>
                    <td data-label="Column 6">Data 15</td>
                    <td data-label="Column 7">Data 16</td>
                    <td data-label="Column 8">Data 17</td>
                    <td data-label="Column 9">Data 18</td>
                </tr>
            </tbody>
        </table>  
    </div>
  );
}

export default App;
