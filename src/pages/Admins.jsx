import React, { useEffect, useState } from "react";
import { BsAlarm, BsPersonPlus } from "react-icons/bs";

const Admins = () => {
  const [Users, setUsers] = useState([]);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [pages, setPages] = useState([1]);
  const [pageCount, setPagesCount] = useState(1);

  const onPerPageOptionChangeHandler = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const onPageOptionChangeHandler = (event) => {
    //setPages(parseInt(event.target.value));
    setSkip(limit* (parseInt(event.target.value)-1))
  };

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setTotal(data.total);
        
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [limit,skip]);

 useEffect(()=>{
  const numOfPages = total%limit?  parseInt(total/limit)+1 :parseInt(total/limit)
  const elements = []
  for (let index = 0; index < numOfPages; index++) {
    elements.push(index)
    setPagesCount(numOfPages)
    setPages(elements)
    setPagesCount(numOfPages)
  }
 },[total, limit, skip])
  // const sortedUsers = currentUsers.sort((a, b) => {
  //           const result = a.lastName.localeCompare(b.lastName);

  //           return result !== 0 ? result : a.firstName.localeCompare(b.firstName);
  //         })

  const tableFields = [
    "ID",
    "Name",
    "company",
    "department",
    "country",
    "gender",
    "age",
    "position",
    "actions",
  ];

  return (
    // <PageTemplate tableFields={tableFields} pageName = {"Admin"} data={Users} icon ={<BsPersonPlus className='pageButtonIcon'/>}/>
    <div className="templateBody">
      <div className="headSection">
        <h2 className="pageTitle">{"Admin"}</h2>
        <div className="pageButton">
          {<BsPersonPlus className="pageButtonIcon" />} <p>Create{" Admin"}</p>
        </div>
      </div>
      <hr className="rounded" />

      <div className="tableScrole">
        <table className="dataTable">
        <tbody>
          <tr>
            {tableFields.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
          {Users.map((item, index) => (
            
            <tr key={index}>
              <td>{item.id}</td>
              <td className="usersData">
                <img src={item.image} />
                <span className="feedTxt">
                  {item.firstName + " " + item.lastName}
                </span>
              </td>
              <td>{item.company.name}</td>
              <td>{item.company.department}</td>
              <td>
                {item.address.city + ", " + item.address.state}
              </td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.company.title}</td>
              <td> </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="bottomBar">
        <div className="bottomBarLeft">
          <select
            name="10"
            className="dropdown"
            onChange={onPerPageOptionChangeHandler}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>per page</p>
        </div>
        <div className="bottomBarRight">
        <select
            className="dropdown"
        
            onChange={onPageOptionChangeHandler}
          >
            {
              pages.map((item,index)=> <option key={index} value={index+1}>{index+1}</option>
              )
            }
            
          </select>
          <p>of {pageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Admins;
