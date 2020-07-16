//..here we have come form rnder kyuki isi ko kar rha h refer
//so this is our 
import React from 'react';
import './App.css';

function App() {
  return (
    //even though it is ejx but seems like html because internally react iske tag ko html jesa bana deta h 
    //but there are few restriction like cant use attribute class we use className 
    <div className="App">
     
       <h1>
         HII, this is first commit
       </h1>
    </div>
     <h1>cant add anything here will show error can add only in the root element i.e div here</h1> 
//we will se that how that code which we have commented works 

  // return(
    //here crateElement can take unlimited agruments but min 3 is necessary
    //now we will also apply style class HERE we are applying the same style which is commented above
    //but ye likhna is quite cumberscent so we undestands now how internally the above things works
  // React.createElement('div' ,{className: 'App'} , React.createElement('h1', null, 'so that is in h1 but with styling'))
  );
}

export default App;
