import React from 'react';
import {Button} from 'react-native';

const Start = props => {
  const {timerStarted, timerTime, startTimer} = props;
  return timerStarted === false && timerTime === 0 ? (
    <Button onPress={startTimer} title={'Start'} />
  ) : null;
};

export default Start;
