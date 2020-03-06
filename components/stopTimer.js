import React from 'react';
import {Button} from 'react-native';

const Stop = props => {
  const {stopTimer, timerStarted} = props;

  return timerStarted === true ? (
    <Button onPress={stopTimer} title={'Stop'} />
  ) : null;
};

export default Stop;
