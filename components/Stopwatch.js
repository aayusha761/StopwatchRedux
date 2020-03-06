import React, {useState, useEffect} from 'react';
import Start from './startTimer';
import Stop from './stopTimer';
import Reset from './resetTimer';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
    Button
} from 'react-native';
import TimerClock from './TimerClock';
import TimerWatch from './TimerWatch';
import {connect} from 'react-redux';
import SyncStorage from 'sync-storage';
import Lap from './LapShow';
import Resume from './resumeTimer';

function Stopwatch(props) {
  // const customMiddleWare = store => next => action => {
  //   useEffect(() => {
  //     (async () => {
  //       await SyncStorage.init();
  //       setTimerTime(SyncStorage.get('time'));
  //     })();
  //   }, []);
  //   console.log("Middleware triggered:", action);
  //   next(action);
  // };
  useEffect(() => {
    (async () => {
      await SyncStorage.init();
      props.update(SyncStorage.get('time'));
    })();
    return () => {
      clearInterval(timer);
    }
  }, []);
  const [timer, setTImer] = useState();

  function startTimer() {
    props.start();
    const timeNow = Date.now() - props.timerTime;
    //console.log(timeNow);
     setTImer(setInterval( async () => {
        props.update(Date.now() - timeNow);
        await SyncStorage.set('time', Date.now() - timeNow);
      }, 10))
  }


  async function stopTimer() {
    props.stop();
    clearInterval(timer);
    //console.log(timerTime);

    await SyncStorage.set('time', props.timerTime);
    console.log(SyncStorage.get('time'));
  }

  // function resumeTimer() {
  //   props.resume();
  // }

  function resetTimer() {
    props.reset();
  }

  function captureTimer() {
    props.capture();
  }

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
          timerTime={props.timerTime}
        />
        <Start
          timerStarted={props.timerStarted}
          timerTime={props.timerTime}
          startTimer={startTimer}
        />
        <Resume
            resumeTimer={startTimer}
            timerStarted={props.timerStarted}
            timerTime={props.timerTime}
        />
        <Stop stopTimer={stopTimer} timerStarted={props.timerStarted} />
        <Reset
          resetTimer={resetTimer}
          timerStarted={props.timerStarted}
          timerTime={props.timerTime}
        />
        <TimerClock
          timerTime={props.timerTime}
          timeArrays={props.timeCaptured}
          captureLap={captureTimer}
        />
        <Button onPress={() => props.navigation.navigate('Lap', {
          data: props.timeCaptured
        })} title={'View more'}/>
      </View>
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
  update: (payload) => dispatch({ type: 'UPDATE_TIMER', payload: payload }),
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
