import React, { useState } from 'react';
import Display from './display';


const Calculator = () => {
  const [currentExpression, setCurrentExpression] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (value) => {
    setCurrentExpression(currentExpression + value);
  };

  const handleClear = () => {
    setCurrentExpression('');
    setPreviousValue(null);
    setOperator(null);
  };

  const handleEvaluate = () => {
    if (operator && previousValue !== null) {
      const result = eval(`${previousValue} ${operator} ${currentExpression}`);
      setCurrentExpression(result.toString());
      setPreviousValue(result);
      setOperator(null);
    }
  };

  const handleOperator = (op) => {
    setOperator(op);
    setPreviousValue(currentExpression);
    setCurrentExpression('');
  };

  return (
    <div className="calculator">
      <Display value={currentExpression}/>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleOperator('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleOperator('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleOperator('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
