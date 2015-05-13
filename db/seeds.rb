# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'captain_america', email: "cap@avengers.com", password: "password")
User.create!(username: 'hulk', email: "hulk@avengers.com", password: "password")
User.create!(username: 'black_widow', email: "bw@avengers.com", password: "password")
User.create!(username: 'iron_man', email: "stark@avengers.com", password: "password")
User.create!(username: 'hawkeye', email: "clint@avengers.com", password: "password")
User.create!(username: 'the_vision', email: "vision@avengers.com", password: "password")
User.create!(username: 'scarlet_witch', email: "sw@avengers.com", password: "password")
User.create!(username: 'ericfirth', email: "ericfirth@gmail.com", password: "password")

TeamSite.create!(name: "avengers_assemble", owner_id: 1)

TeamSiteMembership.create!(team_site_id: 1, user_id: 1)
TeamSiteMembership.create!(team_site_id: 1, user_id: 2)
TeamSiteMembership.create!(team_site_id: 1, user_id: 3)
TeamSiteMembership.create!(team_site_id: 1, user_id: 4)
TeamSiteMembership.create!(team_site_id: 1, user_id: 5)
TeamSiteMembership.create!(team_site_id: 1, user_id: 6)
TeamSiteMembership.create!(team_site_id: 1, user_id: 7)
TeamSiteMembership.create!(team_site_id: 1, user_id: 8)

Channel.create!(team_site_id: 1, title: "Big Battle in NYC a couple years ago")
Channel.create!(team_site_id: 1, title: "Favorite movies")
Channel.create!(team_site_id: 1, title: "Tony's bad fashion/facial hair choices")

Message.create(channel_id: 1, sender_id: 1, text: "that was a fun battle, very harrowing")
Message.create(channel_id: 1, sender_id: 4, text: "remember when hulk smashed loki? that was funny")
Message.create(channel_id: 1, sender_id: 2, text: "haha! don't make me angry because that's when you won't like me!")
Message.create(channel_id: 1, sender_id: 6, text: "y'all make me jealous. i saw some footage, looked hella fun")
Message.create(channel_id: 2, sender_id: 4, text: "I saw Love Actually")
Message.create(channel_id: 2, sender_id: 1, text: "i like classics, um, maybe casablanca!")
Message.create(channel_id: 2, sender_id: 5, text: "Both of those movies suck! Not enough bows!")
