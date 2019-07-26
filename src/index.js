
import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo(){
 return (<div>
   <h1>Lugares para viajar</h1>
   <p>Lista de 3 lugares para viajar</p>
   <ul>
     <li>Nova York</li>
     <li>Canadá</li>
     <li>irlanda</li>
   </ul>
   </div>)

}

ReactDOM.render(<MyInfo />, document.querySelector('.container'));