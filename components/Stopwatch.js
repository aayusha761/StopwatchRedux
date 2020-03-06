import React, {useState, useEffect} from 'react';
import Start from './startTimer';
import Stop from './stopTimer';
import Reset from './resetTimer';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import TimerClock from './TimerClock';
import TimerWatch from './TimerWatch';
import {connect} from 'react-redux';
import SyncStorage from 'sync-storage';
import store from '../reducers/rootReducer';

function Stopwatch(props) {
  const customMiddleWare = store => next => action => {
    useEffect(() => {
      (async () => {
        await SyncStorage.init();
        setTimerTime(SyncStorage.get('time'));
      })();
    }, []);
    console.log("Middleware triggered:", action);
    next(action);
  };
  // useEffect(() => {
  //   (async () => {
  //     await SyncStorage.init();
  //     setTimerTime(SyncStorage.get('time'));
  //   })();
  // }, []);
  const [timer, setTimer] = useState(0);
  const [timerTime, setTimerTime] = useState(0);

  function startTimer() {
    props.start();
    const timeNow = Date.now() - timerTime;
    //console.log(timeNow);
    setTimer(
      setInterval(() => {
        setTimerTime(Date.now() - timeNow);
      }, 10),
    );
  }

  async function stopTimer() {
    props.stop();
    clearInterval(timer);
    //console.log(timerTime);


    await SyncStorage.set('time', timerTime);
    console.log(SyncStorage.get('time'));
  }

  function resetTimer() {
    props.reset();
  }

  function captureTimer() {
    props.capture();
  }

  let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
  let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>StopWatch</Text>
        <TimerWatch
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          centiseconds={centiseconds}
        />

        <Start
          timerStarted={props.timerStarted}
          timerTime={props.timerTime}
          startTimer={startTimer}
        />
        <Stop stopTimer={stopTimer} timerStarted={props.timerStarted} />
        <Reset
          resetTimer={resetTimer}
          timerStarted={props.timerStarted}
          timerTime={props.timerTime}
        />
        <TimerClock
          timerTime={timerTime}
          timeArrays={props.timeCaptured}
          captureLap={captureTimer}
        />
      </View>
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {props.timeCaptured.map((lap, index) => {
          return (
              <View key={index}>
                <Text>{lap}</Text>
              </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => ({
  start: () => dispatch({type: 'START_TIMER'}),
  resume: () => dispatch({type: 'RESUME_TIMER'}),
  stop: () => dispatch({type: 'STOP_TIMER'}),
  reset: () => dispatch({type: 'RESET_TIMER'}),
  capture: () => dispatch({type: 'CAPTURE_TIMER'}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stopwatch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
