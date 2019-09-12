
// import React,{Component} from 'react';cls
import React from 'react';
import '../App.css';
const Person = (props) =>{
    return (
        <div className="App">
             {/* <p>hello ini adalah nilai random {Math.floor(Math.random() * 20)}</p> */}
             <p>
                 hello {props.name} umur kamu adalah {props.age}
                 {props.children}
             </p>
        </div>
    );
    //
}
export default Person;