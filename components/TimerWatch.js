import {Text} from 'react-native';
import React from 'react';

const TimerWatch = props => {
  console.log('props', props)
  let centiseconds = ('0' + (Math.floor(props.timerTime / 10) % 100)).slice(-2);
  let seconds = ('0' + (Math.floor(props.timerTime / 1000) % 60)).slice(-2);
  let minutes = ('0' + (Math.floor(props.timerTime / 60000) % 60)).slice(-2);
  let hours = ('0' + Math.floor(props.timerTime / 3600000)).slice(-2);
  // return AsyncStorage.getItem('time');
  return <Text>{`${hours} : ${minutes} : ${seconds} : ${centiseconds}`}</Text>;
};

export default TimerWatch;
