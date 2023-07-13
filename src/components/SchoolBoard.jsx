import React from 'react';

function SchoolBoard(props) {
  return (
    <div>
      <h3 style={{display: !props.category && 'none'}}>Category:{props.category}</h3>
      <h3 style={{color: !props.category && 'DarkGrey'}}>Post: { props.post }</h3>
    </div>
  )
}

export default SchoolBoard