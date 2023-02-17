import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table className="responsive-table">
            <thead>
                <tr>
                    <th>#</th>
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
                    <td data-label="#">1</td>
                    <td data-label="Имя">Милана</td>
                    <td data-label="Красота">10 из 10</td>
                    <td data-label="Ум">10 из 10</td>
                    <td data-label="Сексуальность">10 из 10</td>
                    <td data-label="Дурацкие вещи">нет</td>
                    <td data-label="Запах">Ароматный</td>
                    <td data-label="Пердит">нет</td>
                    <td data-label="Воняет">нет</td>
                </tr>
                <tr>
                  <td data-label="#">2</td>
                    <td data-label="Имя">Саша</td>
                    <td data-label="Красота">5 из 10</td>
                    <td data-label="Ум">10 из 10</td>
                    <td data-label="Сексуальность">3 из 10</td>
                    <td data-label="Дурацкие вещи">Все</td>
                    <td data-label="Запах">Противный</td>
                    <td data-label="Пердит">Да</td>
                    <td data-label="Воняет">Да</td>
                </tr>
            </tbody>
        </table>  
    </div>
  );
}

export default App;
