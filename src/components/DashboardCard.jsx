import React from 'react'
import { BiLineChartDown, BiLineChart } from 'react-icons/bi'
const DashboardCard = ({title, current, previous, isBearish, data}) => {
    const icon = isBearish? <BiLineChart/>:<BiLineChartDown/>
  return (
    <div className='dashbaordCard'>
    <div className='dashCardleft'>
    <p className='dashbaordCardTitle' >Total {title}</p>
    <p className='dashbaordCardNumber' >{current}</p>
    <div className='dashStateSection'>
        
         from {previous}
         </div>
    </div>

    <div className="dashCardRight">
    <div style={{backgroundColor: isBearish? '#00ff0033' : '#ff000033', color: isBearish? '#00ff00' : 'red',}} className={'dashStateSectionPercent' }> {icon} <p>{32}%</p></div>
        </div>

   </div>
  )
}

export default DashboardCard