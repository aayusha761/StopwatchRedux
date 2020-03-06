import React from 'react';
import {Button} from 'react-native'

const Reset = props => {
  const {resetTimer, timerStarted, timerTime} = props;
  return timerStarted === false && timerTime > 0 ? (
    <Button onPress={resetTimer} title={'Reset'} />
  ) : null;
};

export default Reset;
