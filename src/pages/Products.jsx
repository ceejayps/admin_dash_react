import React,{useEffect, useState} from 'react'
import { BsCollection } from 'react-icons/bs';
import { FaIcons } from 'react-icons/fa';
import PageTemplate from '../components/PageTemplate';

const Products=()=> {
  const [products, setProducts] = useState([]);
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
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
        
      });
  }, [limit,skip]);

 useEffect(()=>{
  const numOfPages = total%limit?  parseInt(total/limit)+1 :parseInt(total/limit)
  const elements = []
  for (let index = 0; index < numOfPages; index++) {
    elements.push(index)
    setPagesCount(numOfPages)
    setPages(elements)
    setPagesCount(numOfPages)
  }},[total, limit, skip])

  const pageName = "Product"
  const pageIcon = <FaIcons className="pageButtonIcon" />

  const tableFields = [
    "ID",
    "Title",
    "Brand",
    "description",
    "price",
    "category",
    "discount%",
    "actions",
  ];
  const list = products.map((item, index) => (       
    <tr key={index}>
      <td>{item.id}</td>
      <td className="usersData">
        <img src={item.thumbnail} />
        <span className="feedTxt">
          {item.title}
        </span>
      </td>
      <td>{item.brand}</td>
      <td>{item.description}</td>
      <td>
        {item.price}
      </td>
      <td>{item.category}</td>
      <td>{item.discountPercentage}%</td>
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
   
  )
}

export default Products