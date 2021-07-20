module Api
  module V1
    class LoginController < ApplicationController
      def index
        user = User.all

        render json: {
          user: user
        }, status: :ok
      end
    end
  end
end
