
import React,{Component} from 'react';
import '../App.css';
const Person = (propss) =>{
    return (
        <div className="App">
             {/* <p>hello ini adalah nilai random {Math.floor(Math.random() * 20)}</p> */}
             <p>
                 hello {propss.name} umur kamu adalah {propss.age}
                 {propss.children}
             </p>
        </div>
    );
    //
}
export default Person;