import {Text} from 'react-native';
import React from 'react';

const TimerWatch = props => {
  const {hours, minutes, seconds, centiseconds} = props;
  // return AsyncStorage.getItem('time');
  return <Text>{`${hours} : ${minutes} : ${seconds} : ${centiseconds}`}</Text>;
};

export default TimerWatch;
