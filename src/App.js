import React, { useState } from 'react';
import Barchart from './components/barchart'; // Update component name to start with uppercase letter
import "./App.css";
import { UserData } from './data';
function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: 'fillPattern rgba(51, 84, 244, 1)', // Customize the bar background color
        borderColor: 'rgba(54, 162, 235, 1)', // Customize the bar border color
        borderWidth: 2,
        borderRadius: [8,8,8,8],
        inflateAmount:'auto',
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the background color on hover
        hoverBorderColor: 'rgba(75, 192, 192, 1)', // Customize the border color on hover
      },
    ],
  options:{
    responsive:true,
    layout: {
      padding: 20
  },
  animation: true,
  },
  });
  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(128, 128, 128, 0.2)' // Grey color for grid lines
        }
      }
    }
  };
  return (
    <div className="App">
    <div className="chart-container">
      <h1>Bar Chart</h1>
      <p className="chart-description">Number of users gained over the years</p>
      <div className="chart">
        <Barchart chartData={userData}  chartOptions={chartOptions}/>
      </div>
    </div>
  </div>
  );
}

export default App;
