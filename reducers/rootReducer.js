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
      };
    default:
      return state;
  }
};

export default rootReducer;
