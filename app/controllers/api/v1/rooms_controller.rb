module Api
  module V1
    class RoomsController < ApplicationController
      def index
        rooms = Room.all

        render json: {
          rooms: rooms
        }, status: :ok
      end
    end
  end
end
