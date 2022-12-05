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
        {props.tableFields.map((item, index) => (
             <tr>
             <td className='usersData'>
              
               <img height={'40px'} width={'40px'} src="image.jpg">
                </img>  <span class="feedTxt">Aron Brown</span>
               
               
               </td>
             <td>software dev</td>
             <td>Jamaica</td>
             <td>active</td>
             <td>72%</td>
             <td>employe</td>
             <td>actions</td>
           </tr>
          ))}
          {props.tableFields.map((item, index) => (
             <tr>
             <td className='usersData'>
              
               <img height={'40px'} width={'40px'} src="image.jpg">
                </img>  <span class="feedTxt">Aron Brown</span>
               
               
               </td>
             <td>software dev</td>
             <td>Jamaica</td>
             <td>active</td>
             <td>72%</td>
             <td>employe</td>
             <td>actions</td>
           </tr>
          ))}
          {props.tableFields.map((item, index) => (
             <tr>
             <td className='usersData'>
              
               <img height={'40px'} width={'40px'} src="image.jpg">
                </img>  <span class="feedTxt">Aron Brown</span>
               
               
               </td>
             <td>software dev</td>
             <td>Jamaica</td>
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