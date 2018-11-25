import { helper } from '@ember/component/helper';

export function timeSpent(params) {
  let [startTime, endTime] = params;
  let duration = Math.abs(new Date(endTime) - new Date(startTime));
  var minutes = parseInt((duration/(1000*60))%60)
    , hours = parseInt((duration/(1000*60*60))%24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

export default helper(timeSpent);
