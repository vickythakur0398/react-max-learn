//..here we have come form rnder kyuki isi ko kar rha h refer
//so this is our 
import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
     
  //      <h1>
  //        HII, this is first commit
  //      </h1>
  //   </div>
//we will se that how that code which we have commented works 

  return(
    //here crateElement can take unlimited agruments but min 3 is necessary
  React.createElement('div' ,null, 'h1' , 'here neither styling nor h1 tag will work')
  );
}

export default App;
