class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @checkin = Checkin.find(comment_params[:checkin_id].to_i)
      @comments = @checkin.comments.order(created_at: :desc)
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:comment_id])
    if @comment.destroy
      @checkin = Checkin.find(params[:checkin_id])
      @comments = @checkin.comments.order(created_at: :desc)
      render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :checkin_id, :body)
  end
end
