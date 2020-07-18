import React from 'react';
//as we know the code in jsx is running like this because of react so its must

//this is a func in es 6 format
const person = (props) => {
    //now if to make our code dyanmic i.e ki sabme alag aie we can add function also in there {}
    //ab isko or tagda props dalke karenge see git if want to know  vese to bahut easy h ab bas vo value dal do jaha jaha call karna ho
    // return  <h2>I am vicky and i am {Math.floor(Math.random()*40)} years old</h2>
    // return <p>I am {props.name} and i am {props.age} years old</p>
   //ab is person ka jaha bhi use karna h vaha kar
   //ab hum chahte h ki extra jo bich me likha h vo n=bhi jae use props ka choldren kehte h 
   return(
       <div>
           <p>I am {props.name} and i am {props.age} years old</p>
           {/* yaha pe aiega prop ka children agar koi ise use karna chahta h to or user jab use karna chaiega to vo kuch bhi pass kar skta h even a new react component humne bas text kia h or children inbuilt h */}
           <p>{props.children}</p>
       </div>
   )
   

    
};

export default person;
//after doing this we have to import the path in app.js to use this as a component