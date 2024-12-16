class UsersController < ApplicationController
  def home
    @users = User.all.includes(photo_attachment: :blob)
  end

  def index
    @q = User.ransack(params[:q])
    @users = @q.result.includes(photo_attachment: :blob).page(params[:page]).per(8)

    @breadcrumbs = [
      { content: "Home", href: "/" },
      { content: "Pals", href: users_path }
    ]
  end

  def show
    @user = User.find_by!(id: params.fetch(:id))
    current_user_id = current_user.id

    session.store("sender_id", current_user_id)
    session.store("recipient_id", @user.id)

    if current_user
      @message = Message.new(sender_id: current_user.id, recipient_id: @user.id)
    else
      @message = nil
    end

    set_meta_tags @user.to_meta_tags

    @breadcrumbs = [
      { content: "Home", href: "/" },
      { content: "Pals", href: users_path },
      { content: @user.full_name }
    ]
  end

  def underconstruction
  end
end
