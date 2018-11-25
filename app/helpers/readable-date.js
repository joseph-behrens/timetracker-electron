import { helper } from '@ember/component/helper';

export function readableDate(dateString) {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
  let start = new Date(dateString);
  return start.toLocaleString('en-US', options);
}

export default helper(readableDate);
