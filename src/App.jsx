import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Homepage from './page/Homepage'
import AboutPost from './components/AboutPost'

function App() {
  const [apiData,changeApiData]=useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/').then((data)=>{
      return data.json();
    }).then((data)=>{
      changeApiData(data);
    })
  },[]);

  return (
    <BrowserRouter>
    <Routes>
      {apiData &&<Route exact path='/' element={<Homepage data={apiData}/>}></Route>}
      {apiData &&<Route path='/posts/:id' element={<AboutPost data={apiData}/>}></Route>}s
    </Routes>
    </BrowserRouter>
  )
}

export default App
