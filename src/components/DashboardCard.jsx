import React from 'react'
import { BiLineChartDown, BiLineChart } from 'react-icons/bi'
const DashboardCard = ({title, current, previous, isBearish, data}) => {
    const icon = isBearish? <BiLineChart/>:<BiLineChartDown/>
  return (
    <div className='dashbaordCard'>
    <div className='dashCardleft'>
    <p>Tatal{title}</p>
    <p>{current}</p>
    <div>{icon} from{previous}</div>
    </div>

    <div className="dashCardRight">
        
        </div>

   </div>
  )
}

export default DashboardCard