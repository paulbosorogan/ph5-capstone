class OrderMailer < ApplicationMailer
    default from: 'bosorogan.paul@gmail.com'
    

  def order_placed 
    @user = params[:user]
    @order = params[:order]
    mail(to: @user.email, subject: "Your order has been placed!")
  end
end