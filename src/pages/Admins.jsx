import React, { useEffect, useState } from "react";
import { BsAlarm, BsPersonPlus } from "react-icons/bs";
import PageTemplate from "../components/PageTemplate";

const Admins = () => {
  const [Users, setUsers] = useState([]);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [pages, setPages] = useState([1]);
  const [pageCount, setPagesCount] = useState(1);

  const onPerPageChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const onPageChange = (event) => {
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
  }, [limit,skip]);

 useEffect(()=>{
  const numOfPages = total%limit?  parseInt(total/limit)+1 :parseInt(total/limit)
  const elements = []
  for (let index = 0; index < numOfPages; index++) {
    elements.push(index)
  }
  setPagesCount(numOfPages)
  setPages(elements)
  setPagesCount(numOfPages)

},[total, limit, skip])

  const pageName = "Admin"
  const pageIcon = <BsPersonPlus className="pageButtonIcon" />

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
  const list = Users.map((item, index) => (       
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
  ))

  return (
  <PageTemplate
  pageName={pageName}
  pageIcon={pageIcon}
  list={list}
  tableFields={tableFields}
  onPageChange={onPageChange}
  onPerPageChange={onPerPageChange}
  pages={pages} pageCount={pageCount}/>
  );
};

export default Admins;
