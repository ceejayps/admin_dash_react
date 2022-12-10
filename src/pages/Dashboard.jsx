import React,{useEffect, useState} from 'react'
import { BsPersonPlus } from 'react-icons/bs'

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
   
 
  </div>
  )
}

export default Dashboard