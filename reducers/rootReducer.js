const initState = {
  timerStarted: false,
  timerTime: 0,
  storeTime: true,
  timeCaptured: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {

    case 'START_TIMER':
      return {
        ...state,
        timerStarted: true,
      };
    case 'UPDATE_TIMER':
      return {
        ...state,
        timerTime: action.payload
      };
    case 'CAPTURE_TIMER':
      let lap = [];
      lap = lap.concat(state.timeCaptured);
      return {
        ...state,
        timeCaptured: lap
      };
    case 'STOP_TIMER':
      return {
        ...state,
        timerStarted: false,
      };
    case 'RESET_TIMER':
      return {
        ...state,
        timerTime: 0,
        timeCaptured: [],
        timerStarted: false
      };
    // case 'RESUME_TIMER':
    //   return {
    //     ...state,
    //     timerStarted: true
    //   };
    default:
      return state;
  }
};

export default rootReducer;
