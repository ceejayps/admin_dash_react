import { data } from 'autoprefixer'
import React from 'react'


function PageTemplate(props) {
  return (
    <div className='templateBody'>
        <div className='headSection'>
            <h2 className='pageTitle'>
                {props.pageName +'s'}
            </h2>

            <div className='pageButton'>
                {props.icon} <p>Create {props.pageName}</p>
            </div>
           
        </div>
        <hr class="rounded"/>
        
        <div className="tableScrole">
      <table className='dataTable'>
        <tr>
        {props.tableFields.map((item, index) => (
            <th>{item}</th>
          ))}
        </tr>
        {props.data.map((item, index) => (
             <tr>
             <td className='usersData'>
               <img height={'50px'} width={'50px'} src={props.data[index].image}/>
                  <span class="feedTxt">{props.data[index].firstName +" "+props.data[index].lastName}</span>
               </td>
               <td>{props.data[index].company.name}</td>
             <td>{props.data[index].company.department}</td>
             <td>{props.data[index].address.city+", "+props.data[index].address.state}</td>
             <td>{props.data[index].gender}</td>
             <td>{props.data[index].age}</td>
             <td>{props.data[index].company.title}</td>
             <td> </td>
           </tr>
          ))}
      </table>
      
      </div>
      <div className="bottomBar">

        <div className="bottomBarLeft">
      <select name="10" className="dropdown">
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
  <p>of {props.data.length}</p>
  </div>
      </div>
    </div>
    
  )
}

export default PageTemplate