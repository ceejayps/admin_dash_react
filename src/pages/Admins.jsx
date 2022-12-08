import React, {useEffect, useState} from 'react'
import PageTemplate from '../components/PageTemplate'
import { BsAlarm, BsPersonPlus } from 'react-icons/bs'





const Admins = () => {
  const [Users, setUsers] = useState([])
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const [Skip, setSkip] = useState([])

  const onOptionChangeHandler = (event) => {
    setLimit(parseInt(event.target.value))}

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`https://dummyjson.com/users?limit=${limit}`)
        .then(response => response.json())
        .then(data =>{ setUsers(data.users); setTotal(data.total) });
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [limit]);

console.log(Users)
  
  // const sortedUsers = currentUsers.sort((a, b) => {
  //           const result = a.lastName.localeCompare(b.lastName);
  
  //           return result !== 0 ? result : a.firstName.localeCompare(b.firstName);
  //         })
  
  const tableFields = ["Name", "company", "department", "country", "gender",'age', "position","actions"]



  return (
   // <PageTemplate tableFields={tableFields} pageName = {"Admin"} data={Users} icon ={<BsPersonPlus className='pageButtonIcon'/>}/>
    <div className='templateBody'>
        <div className='headSection'>
            <h2 className='pageTitle'>
                {'Admin'}
            </h2>

            <div className='pageButton'>
                {<BsPersonPlus className='pageButtonIcon'/>} <p>Create {'Admin'}</p>
            </div>
           
        </div>
        <hr class="rounded"/>
        
        <div className="tableScrole">
      <table className='dataTable'>
        <tr>
        {tableFields.map((item, index) => (
            <th>{item}</th>
          ))}
        </tr>
        {Users.map((item, index) => (
             <tr>
             <td className='usersData'>
               <img height={'50px'} width={'50px'} src={Users[index].image}/>
                  <span class="feedTxt">{Users[index].firstName +" "+Users[index].lastName}</span>
               </td>
               <td>{Users[index].company.name}</td>
             <td>{Users[index].company.department}</td>
             <td>{Users[index].address.city+", "+Users[index].address.state}</td>
             <td>{Users[index].gender}</td>
             <td>{Users[index].age}</td>
             <td>{Users[index].company.title}</td>
             <td> </td>
           </tr>
          ))}
      </table>
      
      </div>
      <div className="bottomBar">

        <div className="bottomBarLeft">
      <select name="10" className="dropdown" onChange={onOptionChangeHandler}>
    <option value="10">10</option >
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
  <p>of {total}</p>
  </div>
  <div className="bottomBarRight">
  <input type="submit" value="hello" onSubmit={console.log("hello")} />
  </div>
      </div>
    </div>
  )
}

export default Admins