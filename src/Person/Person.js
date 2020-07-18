import React from 'react';
//as we know the code in jsx is running like this because of react so its must

//this is a func in es 6 format
const person = () => {
    //now if to make our code dyanmic i.e ki sabme alag aie we can add function also in there {}
    return  <h2>I am vicky and i am {Math.floor(Math.random()*40)} years old</h2>
   //ab is person ka jaha bhi use karna h vaha kar
   

    
};

export default person;
//after doing this we have to import the path in app.js to use this as a component