import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CommentItem from './comment_item';


class comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({body: e.currentTarget.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const submission = {};
    submission['body'] = this.state.body;
    submission['user_id'] = this.props.currentUser.id;
    submission['checkin_id'] = this.props.checkinId;
    this.props.addComment(submission);
    this.setState({body: ""});
  }

  render (){
      let currentUser = this.props.currentUser;
      let commentsDisplay;
      if (this.props.comments){
        commentsDisplay =
        this.props.comments.map(
          (comment)=> <CommentItem
            key={comment.id}
            checkinId={this.props.checkinId}
            currentUserId={this.props.currentUser.id}
            removeComment={this.props.removeComment}
            comment={comment} />);
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
                    value={this.state.body}
                    onChange={this.handleChange}
                    style={{width: 300}}
                    multiLine={true}
                    maxLength="150"
                    />
                  <RaisedButton
                    icon={<i className="fa fa-plus" aria-hidden="true"></i>}
                    label="Add"
                    type="submit"
                    onTouchTap={this.handleSubmit}
                    />
                </div>
              </div>
            </div>
            {commentsDisplay}
          </div>
        );
  }

}

export default comments;
