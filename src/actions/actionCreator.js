export function toggleDay(day) {
  return {
    type: 'TOGGLE_DAY',
    day
  };
}

export function addLabel(day, label) {
  return {
    type: 'ADD_LABEL',
    day,
    label
  };
}

export function addExercise(day, exercise) {
  return {
    type: 'ADD_EXERCISE',
    day,
    exercise
  };
}

export function deleteExercise(day, exercise) {
  return {
    type: 'DELETE_EXERCISE',
    day,
    exercise
  };
}

export function updateProfile(profile) {
  return {
    type: 'UPDATE_PROFILE',
    profile
  };
}