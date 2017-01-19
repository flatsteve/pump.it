const defaultState = {
  profile: {
    name: undefined,
    age: undefined,
    gender: undefined,
    height: undefined,
    weight: undefined
  },
  routine: {
    mon: {
      fullDayName: 'Monday',
      label: undefined,
      category: null,
      exercises: [],
      active: true
    },
    tue: {
      fullDayName: 'Tuesday',
      label: undefined,
      category: null,
      exercises: [],
      active: false
    },
    wed: {
      fullDayName: 'Wednesday',
      label: undefined,
      category: null,
      exercises: [],
      active: true
    },
    thu: {
      fullDayName: 'Thursday',
      label: undefined,
      category: null,
      exercises: [],
      active: false
    },
    fri: {
      fullDayName: 'Friday',
      label: undefined,
      category: null,
      exercises: [],
      active: true
    },
    sat: {
      fullDayName: 'Saturday',
      label: undefined,
      category: null,
      exercises: [],
      active: false
    },
    sun: {
      fullDayName: 'Sunday',
      label: undefined,
      category: null,
      exercises: [],
      active: false
    }
  }
};

export default defaultState;
