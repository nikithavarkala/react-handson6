import React, { useContext } from 'react'
import store from './StoreComponent';
import { Link, useNavigate } from 'react-router-dom';
function NewStudent() {
  const ContextData = useContext(store);
  const navi = useNavigate();
  const NewObj = {
    name: '',
    Age: '',
    Course: '',
    Batch: ''
  }
  const handleChange = (e) => {
    NewObj[e.target.name] = e.target.value;
  }
  const handleClick = () => {
    ContextData.entries.push(NewObj);
    navi('/student')
    // console.log(ContextData);
  }
  return (
    <div>
      <form>
        <div className='box'>
          <div className='input-box'>
      <input name='name' type='text' placeholder='Enter Name' onChange={handleChange} />
                </div>
                <div className="input-box">
      <input name='Age' type='number' placeholder='Enter Age' onChange={handleChange} />
                </div>
                </div>
                <div className="box">
                <div className="input-box">
      <input name='Course' type='text' placeholder='Enter course' onChange={handleChange} />
                </div>
                <div className="input-box">
      <input name='Batch' type='text' placeholder='Enter batch' onChange={handleChange} />
                </div>
                </div>
                <br/>
</form>
      <Link to="/Student"><button style={{ margin: '30px' }}>Cancel</button></Link>
      <Link to="/Student"><button onClick={handleClick} style={{ margin: '30px' }}>Add Student</button></Link>     
    </div>
  )
}
export default NewStudent;