const initialState = {
  loaded: false,
  error: false,
  data: {},
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMMENTS_FULFILLED": {
      return { loaded: true, data: action.payload };
    }
    case "FETCH_COMMENTS_PENDING": {
      return { loaded: false };
    }
    case "FETCH_COMMENTS_REJECTED": {
      return { error: true };
    }
    default: {
      return state;
    }
  }
}
