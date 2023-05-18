import React, { useContext } from 'react'
import store from './StoreComponent';
import { Link, useNavigate } from 'react-router-dom';
function Student() {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  return (
   <>
    <h1>Students Details </h1>
    <button onClick={() => {Navi('/newstudent')}} className="newstd" >Add New Student</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Couse</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {ContextData.entries.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td> <Link to='/editstudent' state={{data: index}} >Edit</Link> </td>
            </tr>
          )
        })}
      </tbody>
    </table>
   </>
  )
}
export default Student;