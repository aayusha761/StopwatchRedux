import React from 'react';
import {Button} from 'react-native';

const Resume = props => {
  const {resumeTimer, timerStarted, timerTime} = props;
  return timerStarted === false && timerTime > 0 ? (
    <Button onPress={resumeTimer} title={'Resume'} />
  ) : null;
};

export default Resume;
