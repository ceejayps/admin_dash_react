import { data } from 'autoprefixer'
import React from 'react'


function PageTemplate({pageName, pageIcon, tableFields, list, onPageChange, onPerPageChange, pages, pageCount}) {
  return (
    <div className="templateBody">
    <div className="headSection">
      <h2 className="pageTitle">{pageName+"s"}</h2>
      <div className="pageButton">
        {pageIcon} <p>Create {pageName}</p>
      </div>
    </div>
    <hr className="rounded"/>
    <div className="tableScrole">
      <table className="dataTable">
      <tbody>
        <tr>
          {tableFields.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
        {list}
        </tbody>
      </table>
    </div>
    <div className="bottomBar">
      <div className="bottomBarLeft">
        <select className="dropdown"
          onChange={onPerPageChange}>
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
          onChange={onPageChange}>
          {
            pages.map((item,index)=> <option key={index} value={index+1}>{index+1}</option>)
          }
        </select>
        <p>of {pageCount}</p>
      </div>
    </div>
  </div>
);
}

export default PageTemplate