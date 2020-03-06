import React from 'react';
import {Button} from 'react-native';

const Start = props => {
  const {timerStarted, timerTime, startTimer} = props;
  return timerStarted === false && timerTime === 0 ? (
    <Button onPress={startTimer} title={'Start'} />
  ) : null;
};

// const mapStateToProps = state => {
//   console.log(state);
//   return state;
// };
//
// const mapDispatchToProps = dispatch => ({
//   start: () => dispatch({type: 'START_TIMER'}),
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Start);

export default Start;
