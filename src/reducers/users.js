const initialState = {
  loaded: false,
  error: false,
  data: {},
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_FULFILLED": {
      return { loaded: true, data: action.payload };
    }
    case "FETCH_USERS_PENDING": {
      return { loaded: false };
    }
    case "FETCH_USERS_REJECTED": {
      return { error: true };
    }
    default: {
      return state;
    }
  }
}
