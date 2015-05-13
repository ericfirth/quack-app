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
Channel.create!(team_site_id: 1, title: "New members?")
Channel.create!(team_site_id: 1, title: "Tony's bad fashion/facial hair choices")
