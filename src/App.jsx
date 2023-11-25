import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './Components/Books'
import NavBar from './Components/NavBar';
import CreateSearch from './Context/bookData'


function App() {
  const [searchData, setSearchData] = useState('');
  const[searchRes,setSearchRes]=useState([]);
  useEffect(()=>{
  
    async function getBooks(){
        try{
        const r1=await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const r2=await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const res1=await r1.json();
        const res2=await r2.json();
       
        // Assuming res1.items and res2.items contain arrays of book data
        const combinedBooks = [...res1.items, ...res2.items];

        // Update the state with the combined book data
        setSearchRes(combinedBooks);

        console.log(combinedBooks); // You can log the combined books if needed
            
    }catch(error){
            console.log(error);
        }
    }
    getBooks();

  },[]);

  return (
    <div>
      <CreateSearch.Provider value={{searchData,setSearchData,searchRes,setSearchRes}}>
          <NavBar/>
          <Books/>
      </CreateSearch.Provider>
            
    </div>
  )
}

export default App
