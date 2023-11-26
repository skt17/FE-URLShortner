import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import { useState } from 'react';
function App() {
  const [shortenURL, setShortenURL] = useState('');
  const [counter,setCounter]= useState(0);
  function getShortenURL(e){
    e.preventDefault();

    // fetch('http://localhost:3002/posts')
    // .then((res) => res.json())
    // .then((result) => {
    //   setPosts(result);
    // });   
    setCounter(prev=>prev+1);
    setShortenURL(`https://urlShortner.com/${counter}`);
  }
  
  return (
    <div className="App">
      <Header />
      <form className='form-card'>

        <input type="text" name="name" placeholder="Enter the URL" />
        <input type="submit" value="Click Here to Short!" onClick={getShortenURL}/>

        <input type="text" name="name" placeholder="Shorten Value" value={shortenURL}/>

      </form>
      <Footer />
    </div>
  );
}

export default App;
