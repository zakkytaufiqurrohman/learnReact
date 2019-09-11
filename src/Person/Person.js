
import React,{Component} from 'react';
import '../App.css';
const Person = () =>{
    return (
        <div className="warna">
             <p>hello ini adalah nilai random {Math.floor(Math.random() * 20)}</p>
        </div>
    );
    //
}
export default Person;