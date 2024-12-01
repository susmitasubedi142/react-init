import React,{useState} from 'react'


export  function UseState() {
    const [num, setnum] = useState(0);
    function sum(){
        setnum(num+1);

    } 
    function reset(){
        setnum(0);
    }
  return (
    <div className="m-5 gap-5  justify-center items-center text-red-400  hidden lg:flex">
      Value: {num}
      <button onClick={sum} className='p-2 text-white bg-blue-500 rounded'>
        Increment +
    
      </button>
      <button 
      onClick={reset}
      className='p-2 text-white bg-red-500 hover:animate-pulse rounded'>
        reset
      </button>
      </div>
    

  )
}
