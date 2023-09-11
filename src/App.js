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
//to add toast make sure you have added toast container
import Spinner from './components/Spinner';


const App = () => { 
  // const [courses, setCourses] = useState('');
  // useEffect( () => {
  //   const fetchData = async() => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       //save data into a variable
  //       setCourses(output.data);
  //     }
  //     catch(error) {
  //       toast.error("something wrong");
  //     }
  //   }

  //   fetchData();
  // }, []);  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response=await fetch(apiUrl);
      let output = await response.json();
      //
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Error in Fetch Data");
    }
    setLoading(false);
  }

  useEffect ( () => {
    fetchData();
  }, [])

  return ( 
    <div className="min-h-screen flex flex-col">

      <div>
      <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData = {filterData} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          loading ? (<Spinner/>) : (<Cards courses={courses}/>);
        </div>
      </div>

    
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