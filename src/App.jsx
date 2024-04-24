import { useState } from "react";
import "./App.css";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
   <main>
    <Header/>
    <Body/>
    <Footer/>
   </main>
  );
}

export default App;
