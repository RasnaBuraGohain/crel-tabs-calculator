import { createStore } from 'redux';

const initialState = {
  selectedTab: 'home',
  calculator: {
    input: '',
    output: '',
    error: '',
  }
};

const reducer = (state, action) => {
  if (action.type === 'SELECT_TAB') {
    return {
      selectedTab: action.payload,
      calculator: state.calculator
    };
  }

  if (action.type === 'EVALUATE') {
    try {// eslint-disable-next-line
      const result = eval(state.calculator.input);
      return {
        selectedTab: state.selectedTab,
        calculator: {
          input: result,
          output: '',
          error: '',
        }
      };
    } catch (e) {
      return {
        selectedTab: state.selectedTab,
        calculator: {
          input: state.calculator.input,
          output: '',
          error: e,
        }
      };
    }
  }
  if (action.type === 'CLEAR') {
    return {
      selectedTab: state.selectedTab,
      calculator: {
        input: '',
        output: '',
        error: '',
      }
    };
  }
  if (action.type === 'BUTTON') {
    return {
      selectedTab: state.selectedTab,
      calculator: {
        input: state.calculator.input + action.payload,
        output: '',
        error: '',
      }
    };
  }
  return state;
};

export default createStore(reducer, initialState);