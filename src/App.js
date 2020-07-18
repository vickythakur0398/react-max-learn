//..here we have come form rnder kyuki isi ko kar rha h refer
//so this is our 
import React from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

function App() {
  return (
    //even though it is ejx but seems like html because internally react iske tag ko html jesa bana deta h 
    //but there are few restriction like cant use attribute class we use className 
    <div className="App">
     
       <h1>
         HII, this is first commit
       </h1>
       <p>hii can add anyting here because it is in the root</p>
       {/* so here the component which we have made vo deikgea  */}
       
       
       {/* other way of writing if code is of one line */}
       <Person name= "vicky" age = "12"/>
       <Person name ="sameer" age ="18"/>
       {/* if you want o add something extra then simply add that like this par ye pua nhi tha ab how to use this ye to show nhi ho rha tha ab hpga next commit me*/}
       <Person name ="stephanie" age ="22">and her hobbies are breaking hearts</Person>

       

    </div>
    // now we are adding few more components in Person.js
     /* <h1>cant add anything here will show error can add only in the root element i.e div here</h1> */
//we will se that how that code which we have commented works 

  // return(
    //here crateElement can take unlimited agruments but min 3 is necessary
    //now we will also apply style class HERE we are applying the same style which is commented above
    //but ye likhna is quite cumberscent so we undestands now how internally the above things works
  // React.createElement('div' ,{className: 'App'} , React.createElement('h1', null, 'so that is in h1 but with styling'))
  );
}

export default App;
