import React, { useState } from 'react';

const AddNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculation = (operation) => {
    setError('');
    
    // Validate that inputs are not empty
    if (num1 === '' || num2 === '') {
      setError('Please enter both numbers first.');
      setResult(null);
      return;
    }

    const firstNumber = Number(num1);
    const secondNumber = Number(num2);

    // Perform calculation based on which button was clicked
    switch (operation) {
      case 'add':
        setResult(firstNumber + secondNumber);
        break;
      case 'subtract':
        setResult(firstNumber - secondNumber);
        break;
      case 'multiply':
        setResult(firstNumber * secondNumber);
        break;
      case 'divide':
        if (secondNumber === 0) {
          setError('Cannot divide by zero!');
          setResult(null);
        } else {
          setResult(firstNumber / secondNumber);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Simple Calculator</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ padding: '5px' }}
        />
      </div>
      
      {/* Operation Control Buttons */}
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => handleCalculation('add')} style={{ marginRight: '5px', padding: '5px 10px' }}>
          Add (+)
        </button>
        <button onClick={() => handleCalculation('subtract')} style={{ marginRight: '5px', padding: '5px 10px' }}>
          Subtract (-)
        </button>
        <button onClick={() => handleCalculation('multiply')} style={{ marginRight: '5px', padding: '5px 10px' }}>
          Multiply (×)
        </button>
        <button onClick={() => handleCalculation('divide')} style={{ padding: '5px 10px' }}>
          Divide (÷)
        </button>
      </div>

      {/* Error display */}
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {/* Result display */}
      {result !== null && (
        <p style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
          Result: {result}
        </p>
      )}
    </div>
  );
};

export default AddNumbers;
