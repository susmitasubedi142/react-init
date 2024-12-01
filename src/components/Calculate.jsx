import React, { useState } from 'react';

export default function Calculate() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('sum'); // Default operation

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const calculateResult = (value1, value2) => {
    const num1 = Number(value1);
    const num2 = Number(value2);

    switch (operation) {
      case 'sum':
        return num1 + num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      default:
        return 0;
    }
  };

  const updateResult = () => {
    const total = calculateResult(input1, input2);
    setResult(total);
  };

  return (
    <div className="flex flex-col justify-between items-center container mx-auto">
      <h1>Calculator</h1>

      <input
        type="number"
        value={input1}
        onChange={handleInput1Change}
        placeholder="Enter first number"
        className="border-2 border-black rounded p-2 mb-2"/>

      <input
        type="number"
        value={input2}
        onChange={handleInput2Change}
        placeholder="Enter second number"
        className="border-2 border-black rounded p-2 mb-2"/>
       

      <select
        value={operation}
        onChange={handleOperationChange}
        className="border-2 border-black rounded p-2 mb-2 w-50">
           
            <option value="sum">Sum</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
              
        
      </select>

      <button
        onClick={updateResult}
        className="bg-blue-600 text-white rounded px-3 py-2 hover:animate-pulse">
        Calculate
      </button>

      <p className="mt-4">The result is: {result}</p>
    </div>
  );
}
