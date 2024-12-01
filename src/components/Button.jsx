import React from 'react';
// import '../button.css';

export function Button(props) {
  return (
    <a href={props.link}>
         <div ClassName="prim-buttons">
            <button ClassName="prim-button">{props.text}</button> {/*changed button to button*/}
         </div>

    </a>
   

    
  );
}
