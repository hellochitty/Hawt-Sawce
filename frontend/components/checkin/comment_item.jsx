import React from 'react';
import {FormattedRelative} from 'react-intl';
import {Link} from 'react-router';

const commentItem =  (props) => {
  var intlData = {
    "locales": "en-US"
  };
  let time = props.comment.created_at || "12-12-2016";
  let deleteLink;
  if (props.comment.commenter_id === props.currentUserId){
    deleteLink = <h5 id="basic-link">Delete Comment</h5>;
  }
  return(
    <div className="comment-item-outer">
      <div className="comment-item">
        <div className="comment-item-header">
          <div className="checkin-user-picture">
            <Link to={`/home/users/${props.comment.commenter_id}`}>
              <img className="checkin-user-image" src={props.comment.commenter_image_url} />
            </Link>
          </div>
          <Link to={`/home/users/${props.comment.commenter_id}`}>
            <h4 className="profile-link">{props.comment.commenter}</h4>
          </Link>
        </div>
        <div>
          <h4 id="checkin-comment"><i>{'"'}{props.comment.body}{'"'}</i></h4>
        </div>
        <div className="comment-item-footer">
          <FormattedRelative value={time} />
          {deleteLink}
        </div>
      </div>
    </div>
  );
};

export default commentItem;
