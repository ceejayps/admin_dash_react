import React, {useEffect,useState} from 'react'
import { FaChartArea, FaDollarSign, FaEnvelopeOpenText, FaSms } from 'react-icons/fa';
import PageTemplate from '../components/PageTemplate';


const Post = () => {
    const [posts, setPosts] = useState([]);
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
      fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.posts);
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
  
    const pageName = "Post"
    const pageIcon = <FaEnvelopeOpenText className="pageButtonIcon" />
  
    const tableFields = [
      "ID",
      "Title",
      "Body",
      "UserId",
      "Reactions",
     "tags",
     "Actions"
    ];
    const list = posts.map((item, index) => (       
      <tr key={index}>
        <td>{item.id}</td>
        <td className="usersData">
          <span className="feedTxt">
            {item.title}
          </span>
        </td>
        <td>{item.body}</td>
        <td>{item.userId}</td>
        <td>
          {item.reactions}
        </td>
        <td>
          {item.tags.join(', ')}
        </td>
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

export default Post