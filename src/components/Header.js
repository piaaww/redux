import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Header.css'
import {addTask} from '../redux/taskSLice/taskSlice';

const Header = () => {
  const [newTask, setnewTask] = useState({title:""});
  const dispatch = useDispatch();
  return (
    <div className='HeaderContent'>
      <h3 id="headerText"> To Do APP</h3>
      <div className='headerContainer'>
        <input className='inputHeader' type="text" placeholder="write your Task ..."
        onChange={(e)=>setnewTask({...newTask,title:e.target.value})}></input>
        <button className='btnADD' 
        onClick={()=>{dispatch(addTask({...newTask,isDone:false,
        id:Math.floor(Math.random()*100000000000000)})); setnewTask({title:""})
        }}> 
        ADD</button>
        </div>
    </div>
  )
}

export default Header