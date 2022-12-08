import React, {useEffect, useState} from 'react'
import PageTemplate from '../components/PageTemplate'
import { BsAlarm, BsPersonPlus } from 'react-icons/bs'





const Admins = () => {
  const [Users, setUsers] = useState([])

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('https://dummyjson.com/users?limit=50')
        .then(response => response.json())
        .then(data => setUsers(data.users));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

console.log(Users)
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





  const tableFields = ["Name", "company", "department", "country", "gender",'age', "position","actions"]



  return (
    <PageTemplate tableFields={tableFields} pageName = {"Admin"} data={Users} icon ={<BsPersonPlus className='pageButtonIcon'/>}/>
  )
}

export default Admins