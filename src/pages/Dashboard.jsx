import React from 'react';
import { useSelector } from 'react-redux';
import statusCards from '../assets/JsonData/status-card.json'
import Chart from 'react-apexcharts'
import StatusCards from '../components/status-card/StatusCards';

const chartOptions = {
  series: [{
      name: 'Running',
      data: [40,70,20,90,36,80,30,91,60,50]
  }, {
      name: 'Calories Burnt',
      data: [400, 300, 700, 800, 400, 160, 400, 200, 510, 100]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct']
      },
      legend: {
          position: 'top'
      },
      grid: {
          show: false
      }
  }
}

const Dashboard = () => {
  const themeReducer = useSelector(state => state.ThemeReducer.mode)
  return (
      <div>
            <div className="row">
                 {
                   statusCards.map((item,index) => (
                     <div className="col-3" key={index}>
                       <StatusCards 
                         icon = {item.icon}
                         title = {item.title}
                         count = {item.count}
                       />
                     </div>
                   ))
                 }
            </div>
          <div className="col-12">
            <div className="card full-height">
                <Chart
                  options={themeReducer === 'theme-mode-dark' ? {
                    ...chartOptions.options,
                    theme: { mode: 'dark'}
                } : {
                    ...chartOptions.options,
                    theme: { mode: 'light'}
                }}
                  series = {chartOptions.series}
                  type = 'line'
                  height= '100%'
                />
            </div>
          </div>
      </div>
  );
};

export default Dashboard;
