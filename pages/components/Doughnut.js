import React from 'react'

import {Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
    
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function DoughnutGraph(props) {
    const data = {
        labels: ["Spent", "Available"],
        datasets: [{
            data: [props.budget , props.amountSpent],
            backgroundColor: ['#E2BD35','#D7DABD'],
            borderColor:  ['#e3c55d','#D7DABD'],
        }]
    }

  const options= {legend: {
    textColor: "black"

},}

  return (
    <div style={{height: '250px'}}>
    <Doughnut className='doughnut-graph' data={data} options={options}></Doughnut>
    </div>
  )
}

export default DoughnutGraph;