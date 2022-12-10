import React,{useEffect, useState} from 'react'
import { BsPersonPlus } from 'react-icons/bs'
import { BiLineChartDown, BiLineChart } from 'react-icons/bi'
import DashboardCard from '../components/DashboardCard'
import '../dashboard.css'


const Dashboard = () => {
 




  const pageName = "Dashboard"
  const pageIcon = <BsPersonPlus className="pageButtonIcon" />

  return (
    <div className="templateBody">
    <div className="headSection">
      <h2 className="pageTitle">{pageName+"s"}</h2>
      <div className="pageButton">
        {pageIcon} <p>Create {"User"}</p>
      </div>
    </div>
    <hr className="rounded"/>
   <div className='cardsection'>
    
   <DashboardCard title={"Users"} current={"72,345"} previous={"71,233"} isBearish ={true} data={[]}/>
   <DashboardCard title={"Users"} current={"72,345"} previous={"71,233"} isBearish ={!true} data={[]}/>
   <DashboardCard title={"Users"} current={"72,345"} previous={"71,233"} isBearish ={!true} data={[]}/>
   <DashboardCard title={"Users"} current={"72,345"} previous={"71,233"} isBearish ={!true} data={[]}/>

   </div>
 
  </div>
  )
}

export default Dashboard