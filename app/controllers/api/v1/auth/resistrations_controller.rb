# アカウント作成用コントローラー
module Api
  module V1
    module Auth
      class ResistrationsController < DeviseTokenAuth::ResistrationsController
        private
        def sign_up_params
          params.permit(:name, :email, :password, :password_confirmation)
        end

        def account_update_params
          params.permit(:name, :email)
        end
      end
    end
  end
end

