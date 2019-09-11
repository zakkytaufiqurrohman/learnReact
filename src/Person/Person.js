
import React,{Component} from 'react';
import '../App.css';
const Person = (props) =>{
    return (
        <div className="warna">
             {/* <p>hello ini adalah nilai random {Math.floor(Math.random() * 20)}</p> */}
             <p>
                 hello {props.name} umur kamu adalah {props.age}
             </p>
        </div>
    );
    //
}
export default Person;