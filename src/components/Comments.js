import React from "react";
import { useSelector } from "react-redux";
import MaterialTable from 'material-table'

export default function Comments() {
  const comments = useSelector((state) => state.comments.data);
  let commentList = [];
    // create comment list
    Object.keys(comments).forEach((key) => {
        commentList.push({
            postId: comments[key].postId,
            id: comments[key].id,
            name: comments[key].name,
            email: comments[key].email,
            body: comments[key].body,

        });
    });

  return (
    <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'postId', field: 'postId' },
            { title: 'id', field: 'id' },
            { title: 'name', field: 'name' },
            { title: 'email', field: 'email'},
            { title: 'body', field: 'body' }
          ]}
          data={commentList}
          title="Comments"
          options={{pageSize: commentList.length, pageSizeOptions: [Math.trunc(commentList.length/5), Math.trunc(commentList.length/2), commentList.length]}}
        />
      </div>
  );
}
