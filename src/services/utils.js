export function getDayOfWeek() {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date().getDay()];
};

export function scrollToRoutine(scheduleElem, routineElem) {
  const marginSize = 25;
  const leftOffset = routineElem.getBoundingClientRect().left - marginSize;

  scheduleElem.scrollLeft = leftOffset;
}