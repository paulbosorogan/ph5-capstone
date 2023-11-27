class UserMailer < ApplicationMailer
    default from: 'bosorogan.paul@gmail.com'
    

  def welcome_email
    @user = params[:user]
    mail(to: @user.email, subject: "Welcome to Fortune Poke Bowl!")
  end
end
