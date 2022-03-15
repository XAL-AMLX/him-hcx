import React, { Component } from 'react';
import background from "./figmasunthree.png"
// import WebFont from 'webfontloader';
import "./App.css";
// import { useEffect } from "react";
  
function App() {

 
   const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: ' no repeat',
    };

//     useEffect(() => {
//       WebFont.load({
//         google: {
//           families: ['Droid Sans', 'Chilanka', 'Verela Round' ,'Dosis' ]
//         }
//       });
//     }, []);

    return (
      <div style={myStyle} >
        <div className='hcx-title'>
          <h1>HCX</h1>
          <div className='hcx-description'>
            <p >An automated IPO</p>
            <p> platform without</p>
            <p> investment banks</p>
          </div>
        </div>
      </div>
    );
  
}
   
export default App;


