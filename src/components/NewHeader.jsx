import React from 'react'

export  function NewHeader() {
  return (
    <div>
    <header>
      <nav className='px-5 flex justify-between bg-orange-50 items-center'>
        
        <div className="flex items-center text-2xl decoration-slate-300 font-bold">
          <img src="images/logo.png" alt="NagarikApp" className="logo" />
          <span>NagarikApp</span>
        </div>
        
        <ul className="list-none flex text-center justify-center">
          <li className="scroll-ml-2. crusor:pointer hover:bg-yellow-500 "><a href="#">Home</a></li>
          <li className="scroll-ml-2. crusor:pointer hover:bg-yellow-500 "><a href="#">Services</a></li>
          <li className="scroll-ml-2. crusor:pointer hover:bg-yellow-500 "><a href="#">News</a></li>
          <li className="scroll-ml-2. crusor:pointer hover:bg-yellow-500 "><a href="#">FAQ</a></li>
          <li className="scroll-ml-2. crusor:pointer hover:bg-yellow-500 "><a href="#">Privacy & Policy</a></li>
          <li className="scroll-ml-2. crusor:pointer hover:bg-yellow-500 "><a href="#">Contact</a></li>
          <li className="dropdown">
            <div className="auth-box">
              <button className="dropbtn">Login</button>
              <button className="dropbtn">Register</button>
            </div>
            <div className="dropdown-content">
              {/* Dropdown content can be added here */}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}
