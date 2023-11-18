import { useReducer } from 'react';

interface CurtainControlsState {
  level: number | null;
}

type CurtainControlsAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'stop' }
  | { type: 'updateLevel'; payload: number };

function useCurtainControls() {
  // curtainControls reducer
  function curtainControlsReducer(state: CurtainControlsState, action: CurtainControlsAction) {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          level: state.level && state.level >= 25 && state.level < 100 ? (state.level ?? 0) + 25 : state.level,
        };
      case 'decrement':
        return {
          ...state,
          level: state.level && state.level <= 100 && state.level > 25 ? (state.level ?? 0) - 25 : state.level,
        };
      case 'stop':
        return {
          ...state,
          level: null,
        };
      case 'updateLevel':
        return {
          ...state,
          level: action.payload,
        };
      default:
        throw new Error();
    }
  }

  // curtainControls state
  const initialState = { level: 0 };

  // curtainControls dispatch
  const [state, dispatch] = useReducer(curtainControlsReducer, initialState);

  // curtainControls actions
  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const stop = () => dispatch({ type: 'stop' });

  const updateLevel = (value: number) => dispatch({ type: 'updateLevel', payload: value });

  return { currentLevel: state.level, increment, decrement, stop, updateLevel };
}

export default useCurtainControls;
