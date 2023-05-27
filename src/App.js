import './CSS/App.css';
import Card from './Components/Card';
import Login from './Pages/Login';
import Details from './Pages/Details';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage'
import Results from './Pages/Results'
import { Route,Switch } from "react-router-dom";
import Footer from './Components/Footer'
import { useState } from 'react';
import {auth,provider} from './firebase'
import Contact from './Pages/Contact'
import Account from './Pages/Account'
function App() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  console.log("User in App state",user);
  const signOut=()=>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }
  return (
    <>
    <div className="App">
    <Switch>
    {
      !user ?
      <Login setUser={setUser} />
      :
      <>
      <Navbar signOut={signOut}/>
      <Route exact path='/' component={Homepage}/>
      <Route  path='/results/:name' component={Results}/>
      <Route path='/details/:id' component={Details}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/account' component={Account}/>
      <Footer/>
      </>
    }
    </Switch>
    
    
    </div>
    </>
  );
}

export default App;
