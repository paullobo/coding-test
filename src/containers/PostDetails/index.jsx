
import React from 'react';

export function PostDetails(props) {
  const {post} = props;
    return (<div>
       <div>{post ? JSON.stringify(props.post) : 'No Selected Post'}</div>
       </div>
    );
  }
  