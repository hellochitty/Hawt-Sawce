import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CommentItem from './comment_item';

const comments =  (props) => {
let currentUser = props.currentUser;
  let commentsDisplay;
  if (props.comments){
    commentsDisplay =
    props.comments.map(
      (comment)=> <CommentItem comment={comment} />);
  }
  return(
    <div className="comments-display">
      <div className="comment-item-outer">
        <div className="comment-form">
          <div className="comment-form-inner">
            <div className="checkin-user-picture">
              <Link to={`/home/users/${currentUser.id}`}>
                <img className="checkin-user-image" src={currentUser.image_url} />
              </Link>
            </div>
            <TextField
              hintText="Comment: 150 character max"
              fullWidth={false}
              multiLine={true}
              maxLength="150"
              />
          </div>
        </div>
      </div>
      {commentsDisplay}
    </div>
  );
};

export default comments;
