import React from 'react';
import {FormattedRelative} from 'react-intl';

const commentItem =  (props) => {
  var intlData = {
    "locales": "en-US"
  };
  let time = props.comment.created_at || "12-12-2016";

  return(
    <div className="comment-item-outer">
      <div className="comment-item">
        <p>{props.comment.body}</p>
        <p>{props.comment.commenter}</p>
        <p>{props.comment.commenter_id}</p>
        <p>{props.comment.commenter_image_url}</p>
        <FormattedRelative value={time} />
      </div>
    </div>
  );
};

export default commentItem;
