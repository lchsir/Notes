const utils =  {
  forMateTime(date) {
    if (!date) return '';
    let time = date.toLocaleString();
    time = time.replace(/\//g, '-');
    let period = time.substring(9, 11);
    let hour = parseInt(time.substring(11, time.indexOf(':')));
    if (period === '下午') {
      hour += 12;
    }
    
    time =
    time.substring(0, 9) + ' ' + hour + time.substring(time.indexOf(':'))
    return time;
  },
};
   
  export default utils;