import React from "react";
import { useSelector } from "react-redux";
import Users from "./components/Users";
import Comments from "./components/Comments";

function App() {
  const usersLoaded = useSelector((state) => state.users.loaded);
  const usersErr = useSelector((state) => state.users.error);
  const commentsLoaded = useSelector((state) => state.comments.loaded);
  const commentsErr = useSelector((state) => state.comments.error);

    return (
      <div>
        {usersLoaded ? <Users /> : usersErr ? <div>"error loading users"</div> : <div>"loading users..."</div>}
        {commentsLoaded ? <Comments /> : commentsErr ? <div>"error loading comments"</div> : <div>"loading comments..."</div>}
      </div>

    );
}

export default App;
