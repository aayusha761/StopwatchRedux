import React, {useState} from 'react';
import {Button} from 'react-native';

function TimerClock(props) {
  const {timerTime, timeArrays, captureLap} = props;

  function convertSeconds() {
    let cs = Math.floor(timerTime / 10) % 100;
    let s = Math.floor(timerTime / 1000) % 60;
    let m = Math.floor(timerTime / 60000) % 60;
    let h = Math.floor(timerTime / 3600000);

    let timeArray = timeArrays;
    let time = `${h} : ${m} : ${s} : ${cs}`;
    if (cs !== 0) {
      timeArrays.push(time);
      captureLap(timeArray);
    }
  }

  return <Button onPress={convertSeconds} title={'Capture'} />;
}

// class TimerClock extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             timeCaptured:[]
//         }
//     }
//
//     convertSeconds(){
//         console.log(this);
//         let cs = (Math.floor(this.props.timerTime / 10) % 100);
//         let s = (Math.floor(this.props.timerTime / 1000) % 60);
//         let m = (Math.floor(this.props.timerTime / 60000) % 60);
//         let h = Math.floor(this.props.timerTime / 3600000);
//
//         let timeArray = this.props.timeArray;
//         let time=`${h} : ${m} : ${s} : ${cs}`;
//         if (cs !== 0)
//         {
//             timeArray.push(time);
//             this.setState({
//                 timeCaptured: timeArray
//             });
//         }
//     }
//     render() {
//         return <Button onPress={this.convertSeconds.bind(this)} title={'Capture'}/>
//     }
// };

export default TimerClock;
