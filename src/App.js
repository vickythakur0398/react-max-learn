//..here we have come form rnder kyuki isi ko kar rha h refer
//so this is our 
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

// function App() {
// 
//  state = {
//   Persons : [
//      {name: 'vicky' , age:'22'},
//      {name:'sameer' , age:"28"},
//      {name :'haridas', age :'8888'} ]
// };


//   return (
//     //even though it is ejx but seems like html because internally react iske tag ko html jesa bana deta h 
//     //but there are few restriction like cant use attribute class we use className 
//     <div className="App">
     
//        <h1>
//          HII, this is first commit
//        </h1>
//        <p>hii can add anyting here because it is in the root</p>
//        <Person name ={this.state.Persons[0].name} age ={this.state.Persons[0].age}/>
//        {/* so here the component which we have made vo deikgea  */}
       
       
//        {/* other way of writing if code is of one line */}
//        {/* <Person name= "vicky" age = "12"/> */}
//        {/* <Person name ="sameer" age ="18"/> */}
       
       
//        {/* if you want o add something extra then simply add that like this par ye pua nhi tha ab how to use this ye to show nhi ho rha tha ab hpga next commit me*/}
//        {/* <Person name ="stephanie" age ="22">and her hobbies are breaking hearts</Person> */}

       

//     </div>
//     // now we are adding few more components in Person.js
//      /* <h1>cant add anything here will show error can add only in the root element i.e div here</h1> */
// //we will se that how that code which we have commented works 

//   // return(
//     //here crateElement can take unlimited agruments but min 3 is necessary
//     //now we will also apply style class HERE we are applying the same style which is commented above
//     //but ye likhna is quite cumberscent so we undestands now how internally the above things works
//   // React.createElement('div' ,{className: 'App'} , React.createElement('h1', null, 'so that is in h1 but with styling'))
//   );
// }


//pehla wala jo tha vo class component nhi tha to state use nhi kar skte the 
//now we are learning about state and ye value jo hum call kar rhe h vo hardcoded h to if we want ki ye kuch andar se hi value le sake or set kar sake to for that we use state or ise bas class components use kar skta h na ki functional component se but after js-18 hook se kar skte h
//  //state is a js object i.e key value pair hota h


class App extends Component{
  state = {
   persons: [
      {name:'vicky' ,age: '22' },
      {name: 'sammer' , age:'24'},
    {name:'neha' , age:'22'}],
    justToShowIskoAffect : 'nhi karega set state'
   }
   

  // here we are handling click button for first will check its workig or not
  switchHandler = () =>{
    console.log('hii');
    //now fun part begin ab hum yaha pe state ko change karenge on click state me jo bhi h or agar me updation chahta hu click mne to jo me yaha likhunga vo ho jaega click pe or state bas usi state ko change karega jese bas persons pe karengeto ye ise overwrite kar dega is state se
    //niche ek or likha just to show state ise kuch nhi karega
    //or there is a way of setting it i.e setState
    
    this.setState({
      persons: [
        {name:'vicky Thakur' ,age: '23' },
        {name: 'sammer Ranjan' , age:'24'},
      {name:'Neha Meena' , age:'23'}]

    })

  } 
  render(){
    return(
      <div className = "App">
      
        <h1>hii thiis is class component</h1>
        <button onClick ={this.switchHandler}>click here</button>
        <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age}></Person>
        <Person name = {this.state.persons[1].name}
         age ={this.state.persons[1].age}
         //yaha pe hum chanhte h ki ye isko bhi click karne pe ho jae islie humne yaha dal dia h or yaha humne dala h kyuki person.js me to hum switch handler ko acces nhi kar skte par ab click ko as a prop ki tarah kar skte h
         click= {this.switchHandler}></Person>
        <Person name = {this.state.persons[2].name} age ={this.state.persons[2].age}></Person>



      </div>
    )
  }
}

export default App;
