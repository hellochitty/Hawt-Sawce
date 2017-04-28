class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @checkin = Checkin.find(:checkin_id)
      render 'api/checkins/show'
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :checkin_id, :body)
  end

end
