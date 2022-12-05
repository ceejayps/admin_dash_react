import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { BsAlarm, BsPersonPlus } from 'react-icons/bs'

const Admins = () => {
  const currentUsers = [{
    firstName: "Bob",
    lastName: "Adler"
  }, {
    firstName: "Barney",
    lastName: "Jones"
  }, {
    firstName: "Freddie",
    lastName: "Crougar"
  }, {
    firstName: "Bob",
    lastName: "Adams"
  }, {
    firstName: "Joe",
    lastName: "Lewis"
  }, {
    firstName: "Joseph",
    lastName: "Lewis"
  }];


  
  const sortedUsers = currentUsers.sort((a, b) => {
            const result = a.lastName.localeCompare(b.lastName);
  
            return result !== 0 ? result : a.firstName.localeCompare(b.firstName);
          })
  
  console.log(sortedUsers);


  const tableFields = ["Name", "position", "country", "status",'portfolio', "role",""]



  return (
    <PageTemplate tableFields={tableFields} pageName = {"Admin"} icon ={<BsPersonPlus className='pageButtonIcon'/>}/>
  )
}

export default Admins