export const getUsers = () => {
  return {
    type: "FETCH_USERS",
    payload: fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (response) => response.json()
    ),
  };
};

export const getComments = () => {
  return {
    type: "FETCH_COMMENTS",
    payload: fetch(`https://jsonplaceholder.typicode.com/comments`).then(
      (response) => response.json()
    ),
  };
};
