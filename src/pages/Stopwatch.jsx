import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setIsRunning(false);
        } else {
          if (minutes === 0 && seconds === 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          } else if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, hours, minutes, seconds]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <form className="form-control d-flex mt-5">
      <div>
        <label>Hours:</label>
        <input type="number" value={hours} className='form-control w-75' onChange={(e) => setHours(parseInt(e.target.value, 10))} />
      </div>
      <div>
        <label>Minutes:</label>
        <input type="number" value={minutes} className='form-control w-75' onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
      </div>
      <div>
        <label>Seconds:</label>
        <input type="number" value={seconds} className='form-control w-75' onChange={(e) => setSeconds(parseInt(e.target.value, 10))} />
      </div>
      <h1 className='me-5 float-center'>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </h1>
      <button onClick={handleStartPause} className='btn btn-success me-2'>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset} className='btn btn-danger'>Reset</button>
    </form>
  );
};

export default Stopwatch;
