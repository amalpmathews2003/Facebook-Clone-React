import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { useStateValue } from './components/StateProvider';
 
function App() {
  const [{user}, ]=useStateValue()
  return (
    <div className="app">
      {!user ?
        <Login/>
      :
      <React.Fragment>
        <Header/>      

        <div className="app__body">
          <Sidebar/>
          <Feed/>
          {/* Widgets */}
        </div>
      </React.Fragment>
         
          
      
      }
      
      
    </div>
  );
}

export default App;
