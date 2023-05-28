import React from 'react'

import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

function LineGraph({data}) {
    const chartData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
            data: [550,300,450,500,840],
            borderColor: 'rgba(0, 0, 0, 0.7)',
            backgroundColor: 'transparent',
        }]
    }

  const options= {}

  return (
    <div>
    <Line className='line-graph' data={chartData} options={options}></Line>
    </div>
  )
}

export default LineGraph