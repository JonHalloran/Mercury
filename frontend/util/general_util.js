export const convertTime = seconds => {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var seconds = Math.floor((seconds % 3600) % 60);
  var time = "";
  if (hours > 0) {
    time += hours + ":";
  }
  if (minutes < 10 && hours > 0) {
    time += "0";
  }
  time += minutes + ":";
  if (seconds < 10) {
    time += "0";
  }
  time += seconds;
  return time;
};
