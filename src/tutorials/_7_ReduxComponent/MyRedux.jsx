
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Actions/CounterActions';

function MyRedux() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
      <div>
          <h1>My Redux Counter</h1> 
          <p>Count: {count}</p>
          <button onClick={() => dispatch(increment())} className='btn btn-primary me-2'>Artır</button>
          <button onClick={() => dispatch(decrement())} className='btn btn-danger'>Azalt</button>
    </div>
  )
}

export default MyRedux;
