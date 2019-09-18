
// import React,{Component} from 'react';cls
import React from 'react';
import './Person.css'
const Person = (props) =>{
    return (
        <div className="Person">
             {/* <p>hello ini adalah nilai random {Math.floor(Math.random() * 20)}</p> */}
             <p onClick={props.click}>
                 hello  {props.name} umur kamu adalah {props.age}
                 {props.children}
             </p>
            <span className="input"><input type="text" onChange={props.change} value={props.name}/></span>
        </div>
       
    );
    //
}
export default Person;