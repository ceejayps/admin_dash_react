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
             <td>{props.data[index].company.title}</td>
             <td>{props.data[index].address.city+", "+props.data[index].address.state}</td>
             <td>active</td>
             <td>72%</td>
             <td>employe</td>
             <td>actions</td>
           </tr>
          ))}
          
        
      
       
        
       
      </table>
      </div>
    </div>
    
  )
}

export default PageTemplate