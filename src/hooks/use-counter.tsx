import { useReducer } from 'react';

interface CounterState {
  count: number;
}

type CounterAction = { type: 'increment' } | { type: 'decrement' };

function useCounter() {
  // counter reducer
  function counterReducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  // counter state
  const initialState = { count: 0 };

  // counter dispatch
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // counter actions
  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return { currentValue: state.count, increment, decrement };
}

export default useCounter;
