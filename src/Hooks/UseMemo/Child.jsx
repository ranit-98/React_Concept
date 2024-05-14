import React, { memo } from 'react'

const Child = (props) => {
    console.log("child",props.data);
  return (
    <div>
      <h1>Hello from child</h1>
    </div>
  )
}

export default memo(Child)
