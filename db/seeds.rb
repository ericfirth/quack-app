# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'guest', email: "guest@avengers.com", password: "password") #1
User.create!(username: 'captain_america', email: "cap@avengers.com", password: "password") #2
User.create!(username: 'hulk', email: "hulk@avengers.com", password: "password") #3
User.create!(username: 'black_widow', email: "bw@avengers.com", password: "password") #4
User.create!(username: 'iron_man', email: "stark@avengers.com", password: "password") #5
User.create!(username: 'hawkeye', email: "clint@avengers.com", password: "password") #6
User.create!(username: 'the_vision', email: "vision@avengers.com", password: "password") #7
User.create!(username: 'scarlet_witch', email: "sw@avengers.com", password: "password") #8
User.create!(username: 'groot', email: "g@avengers.com", password: "password") #9
User.create!(username: 'rocket_raccoon', email: "rr@avengers.com", password: "password") #10
User.create!(username: 'black_panther', email: "bp@avengers.com", password: "password") #11
User.create!(username: 'star_lord', email: "sl@avengers.com", password: "password") #12
User.create!(username: 'captain_marvel', email: "cm@avengers.com", password: "password") #13

TeamSite.create!(name: "cool_company", owner_id: 1)
TeamSite.create!(name: "avengers_assemble", owner_id: 2)

TeamSiteMembership.create!(team_site_id: 1, user_id: 1)
TeamSiteMembership.create!(team_site_id: 2, user_id: 1)
TeamSiteMembership.create!(team_site_id: 2, user_id: 2)
TeamSiteMembership.create!(team_site_id: 2, user_id: 3)
TeamSiteMembership.create!(team_site_id: 2, user_id: 4)
TeamSiteMembership.create!(team_site_id: 2, user_id: 5)
TeamSiteMembership.create!(team_site_id: 2, user_id: 6)
TeamSiteMembership.create!(team_site_id: 2, user_id: 7)
TeamSiteMembership.create!(team_site_id: 2, user_id: 8)
TeamSiteMembership.create!(team_site_id: 2, user_id: 9)
TeamSiteMembership.create!(team_site_id: 2, user_id: 10)
TeamSiteMembership.create!(team_site_id: 2, user_id: 11)
TeamSiteMembership.create!(team_site_id: 2, user_id: 12)
TeamSiteMembership.create!(team_site_id: 2, user_id: 13)

Channel.create!(team_site_id: 1, title: "General")
Channel.create!(team_site_id: 2, title: "General")
Channel.create!(team_site_id: 2, title: "Big Battle in NYC a couple years ago")
Channel.create!(team_site_id: 2, title: "Favorite movies")
Channel.create!(team_site_id: 2, title: "Tony's bad fashion/facial hair choices")

Message.create(channel_id: 3, sender_id: 2, text: "that was a fun battle, very harrowing")
Message.create(channel_id: 3, sender_id: 5, text: "remember when hulk smashed loki? that was funny")
Message.create(channel_id: 3, sender_id: 2, text: "haha! don't make me angry because that's when you won't like me!")
Message.create(channel_id: 3, sender_id: 7, text: "y'all make me jealous. i saw some footage, looked hella fun")
Message.create(channel_id: 4, sender_id: 5, text: "I saw Love Actually")
Message.create(channel_id: 4, sender_id: 2, text: "i like classics, um, maybe casablanca!")
Message.create(channel_id: 4, sender_id: 6, text: "Both of those movies suck! Not enough bows!")

PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 3, text: "hey hulk")
PrivateMessage.create(team_site_id: 1, sender_id: 3, receiver_id: 2, text: "wassup cap")
PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 3, text: "new movie made a lot of money")
PrivateMessage.create(team_site_id: 1, sender_id: 3, receiver_id: 2, text: "sure did")
PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 3, text: "you got points? i do. gonna buy a boat with my money")
PrivateMessage.create(team_site_id: 1, sender_id: 3, receiver_id: 2, text: "yeah i bought one after the last movie, but i smashed it :(")
PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 4, text: "hi black widow")
PrivateMessage.create(team_site_id: 1, sender_id: 4, receiver_id: 2, text: "hi cap")
