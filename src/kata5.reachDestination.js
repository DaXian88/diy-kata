const reachDestination = (distance, speed) => {
  const totalTime = distance / speed;
  let totalTimeRounded = Math.ceil(totalTime);
  if (totalTimeRounded - totalTime > 0.5) {
    totalTimeRounded -= 0.5;
    return `I should be there in ${totalTimeRounded} hours.`;
  }
  return `I should be there in ${totalTimeRounded} hours.`;
};

module.exports = reachDestination;
