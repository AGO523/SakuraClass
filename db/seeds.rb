room = Room.new(
  name:  "ひまわりクラス"
)
room.save!

30.times do |n|
  user = User.new(
    email: "test#{n + 1}@test.com",
    name: "child#{n + 1}",
    password: "111111",
    password_confirmation: "111111"
  )
  user.save!
end

  # 3.times do |n|
  #   post = Post.new(
  #     name: "testポスト_#{n}",
  #     user_id: "ユーザー_#{n}",
  #   )
  #   post.save!
  # end
