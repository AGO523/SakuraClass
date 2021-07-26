# アカウント作成用コントローラー
module Api
  module V1
    module Auth
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
        private
        def sign_up_params
          byebug
          params.require(:params).permit(:name, :email, :password, :password_confirmation)
        end

        def account_update_params
          byebug
          params.permit(:name, :email)
        end
      end
    end
  end
end

