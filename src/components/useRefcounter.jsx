import React, { useRef } from 'react'

export  function Refcounter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return (
      <button onClick={handleClick}
      className='border-2 border-black '
      >Click me!</button>

  )
}
