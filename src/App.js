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
    // ek tarike se this is our database and in bigger app we are getting these from the servers but here we are gettin these from here set or change to niche kar rhe h par data base to yahi h
   persons: [
      {name:'vicky' ,age: '22' },
      {name: 'sammer' , age:'24'},
    {name:'neha' , age:'22'}],
    justToShowIskoAffect : 'nhi karega set state',
    // yaha pe ye add kia h boolean jo pehle hi false dikha rha h okk
    showPerson : false
   }
   

  // here we are handling click button for first will check its workig or not
  //ab yaha hum harcore nhi kar rhe h balki khud denge ki kya likhna h bas ek ke lie 
  switchHandler = (newName) =>{
    console.log('hii');
    //now fun part begin ab hum yaha pe state ko change karenge on click state me jo bhi h or agar me updation chahta hu click mne to jo me yaha likhunga vo ho jaega click pe or state bas usi state ko change karega jese bas persons pe karengeto ye ise overwrite kar dega is state se
    //niche ek or likha just to show state ise kuch nhi karega
    //or there is a way of setting it i.e setState
    
    this.setState({
      persons: [
        {name: newName ,age: '23' },
        {name: 'sammer Ranjan' , age:'24'},
      {name:'Neha Meena' , age:'23'}]

    })

  }
  
  //ab yaha pe hum input ke hisab se change karaenge nam for that
  //event kyuki click karne pe event hi jaega hai na or change karana h state ko  
  nameChangeHandler = (event) =>{

    this.setState({
      persons: [
        {name: 'vicky' ,age: '23' },
        {name: 'sameer ranjan' , age:'24'},
        // isme kya h ki jo event me jo ki input h usme jo aiega contet uski value iske naam ki jagah show karega jisme hum change karna chahte h usme add karoo me neha me kar rha hu
        {name: event.target.value , age:'23'}]

    })
  }

    //now we will render our content jo ki person h conditionally to crux ye h ki jab button click karenge to hi vo show ho vrna na ho okkk
tooglePerson = () =>{
  //yaha false isme bhar lia doesShow me  to reocurring h ek false true aise
  const doesShow = this.state.showPerson;
  //or yaha state ko jabhi change kia agar agar showPerson ulta h doesShow se to 
  this.setState({showPerson : !doesShow});


}



  
  render(){
      //now we are handling dynamic content jo pehle kia tha vahi but in the preffered and elegent way
      //when react render something to the screen it executes the render method and not return statement evenry thing wtever we have written there
      //initially person ko null de dia 
      let persons = null;
      //yaha pe hum if else use kar skte h 
      if(this.state.showPerson === true){
        //agr true h to ise set karde Person ko ise bas or fir return wale me ise use kar lo
        persons = (
        <div>
        {/* ab ye jsx ke anddar h to me ise fliexible bana rha hu na ki hardcore kar rha hu as we are doing */}
        {/* mera sole aim h ki me state ke har ek element ko chnage kar du to for that es-6 i.e vanilla js provide us .map() function ab ye har pe chalega to jo hume karna h vo function ye method hum likh denge uske andar or vo har state ke element par chalega */}
        {this.state.persons.map(person_or_anyname =>{
          {/* obvious h kuch return karna hoga to vahi return karrnge jo hum is map funcn se har element se karana chahte ho to vo name or age hi h vahi to chaie hume or hum ye map karan chahte h person component me  */}

          return <Person 
          name={person_or_anyname.name} 
          age = {person_or_anyname.age}/>
        })}

        
        {/* ye mene list ke lie kia h ki yaha pe ky ah hum individually hi har data ko daal rhe h to if our data base get altered or something happens then it wont work simply kyuki ye refer karega alag ko or aiega alag if order is changed so to avoid this we have to use a flexible way or outputting list comment kar dia ab isko  */}
{/*        
              <Person name = {this.state.persons[0].name} 
              age ={this.state.persons[0].age}></Person>
              <Person name = {this.state.persons[1].name}
              age ={this.state.persons[1].age}
              //yaha pe hum chanhte h ki ye isko bhi click karne pe ho jae islie humne yaha dal dia h or yaha humne dala h kyuki person.js me to hum switch handler ko acces nhi kar skte par ab click ko as a prop ki tarah kar skte h
              //  now we want ki hum ye state ka data hardcore na kare balki apni marzi se bheje
              click= {this.switchHandler.bind(this, 'vickyy')}></Person>
              <Person name = {this.state.persons[2].name} 
              age ={this.state.persons[2].age}
              // yaha jo changed dala h vo hi props me bhejenge
              changed = {this.nameChangeHandler}></Person>
           */}
         </div>
        );

      }




    return(
      <div className = "App">
      
        <h1>hii thiis is class component</h1>
        <button onClick= {this.tooglePerson}>Show Persons</button>
        {/* yaha hum refer kar rhe jo humne upar banaya h persons ka variable */}
        {persons}
       
        
          

          
          



      </div>
    );
  }
}

export default App;
