import React from 'react';

function Welcome(props) {
  return (
    <div style={{ fontSize: 100 }} className='text-center'>Welcome, {props.meassage}!</div>
  )
}

export default Welcome