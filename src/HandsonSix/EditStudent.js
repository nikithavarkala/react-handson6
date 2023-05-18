import React, { useContext } from 'react'
import store from './StoreComponent';
import { Link,useLocation, useNavigate } from 'react-router-dom';
function EditStudent() {
   const ContextData = useContext(store);
   const Navi = useNavigate();
   const index = useLocation().state.data;
    const updateObj = {
      name: ContextData.entries[index].name,
      Age: ContextData.entries[index].Age,
      Course: ContextData.entries[index].Course,
      Batch: ContextData.entries[index].Batch
    }
   const HandleChange = (e) => {
    updateObj[e.target.name] = e.target.value;
   }
   const handleUpdate = () => {
    ContextData.entries[index] = updateObj;
    Navi(-1)
   }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Edit Student</h1>
        <form>
        <div className='box'>
          <div className='input-box'>
        <input type='text' name='name' placeholder={ContextData.entries[index].name} onChange={HandleChange} />
        <span className="sp">NAME</span>
                </div>
                <div className="input-box">
        <input type='number' name='Age' placeholder={ContextData.entries[index].Age} onChange={HandleChange}/>
        <span>AGE</span>
                </div>
                </div>
                <div className="box">
                <div className="input-box">
        <input type='text' name='Course' placeholder={ContextData.entries[index].Course}onChange={HandleChange}/>
        <span className="sp">COURSE</span>
                </div>
                <div className="input-box">
        <input type='text' name='Batch' placeholder={ContextData.entries[index].Batch}onChange={HandleChange}/>
        <span>BATCH</span>
                </div>
                </div>
                <br/>
        </form>
        <Link to="/Student"><button style={{ margin: '30px' }}>Cancel</button></Link>
        <Link to="/Student"><button onClick={handleUpdate} style={{ margin: '30px' }}>Update</button></Link>
    </div>
  )
}
export default EditStudent;