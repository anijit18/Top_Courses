import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from "./data";
import React from 'react';
import { toast } from 'react-toastify';


const App = () => { 
  const [courses, setCourses] = useState('');
  useEffect( () => {
    const fetchData = async() => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save data into a variable
        setCourses(output.data);
      }
      catch(error) {
        toast.error("something wrong");
      }
    }

    fetchData();
  }, []);  

  return ( 
    <div>

      <div>
      <Navbar/>
      </div>

      <div>
      <Filter
        filterData = {filterData}
      />
      </div>

      {/* <div>
        <Cards courses={courses}/>
      </div> */}
      
      

      
      
    </div>
) };

export default App;


// const[text, setText] = useState('');

  // function changeHandler (event) {
  //   console.log(text);
  //   setText(event.target.value);
  // }

  // useEffect ( () => {
  //   console.log("HI");
  // } )

  // return (
  //   <div className="App">
  //     <input type="text" onChange={changeHandler}></input>
  //   </div>
  // );