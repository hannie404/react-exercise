import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  }, [seconds]);

  return (
    <div style={{ backgroundColor }}>
      <form className='p-5' style={{width : 'fit-content'}}>
        <h1>{seconds} seconds</h1>
        <button onClick={handleStartPause} className="btn btn-light me-2">
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset} className="btn btn-dark me-2 ms-2">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Timer;
