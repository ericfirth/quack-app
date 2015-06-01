# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: 'guest', email: "guest@avengers.com", password: "password") #1
User.create!(username: 'ericfirth', email: "ericfirth@gmail.com", password: "password") #2
User.create!(username: 'captain_america', email: "cap@avengers.com", password: "password") #3
User.create!(username: 'hulk', email: "hulk@avengers.com", password: "password") #4
User.create!(username: 'black_widow', email: "bw@avengers.com", password: "password") #5
User.create!(username: 'iron_man', email: "stark@avengers.com", password: "password") #6
User.create!(username: 'hawkeye', email: "clint@avengers.com", password: "password") #7
User.create!(username: 'the_vision', email: "vision@avengers.com", password: "password") #8
User.create!(username: 'scarlet_witch', email: "sw@avengers.com", password: "password") #9
User.create!(username: 'groot', email: "g@avengers.com", password: "password") #10
User.create!(username: 'rocket_raccoon', email: "rr@avengers.com", password: "password") #11
User.create!(username: 'black_panther', email: "bp@avengers.com", password: "password") #12
User.create!(username: 'star_lord', email: "sl@avengers.com", password: "password") #13
User.create!(username: 'captain_marvel', email: "cm@avengers.com", password: "password") #14

TeamSite.create!(name: "cool_company", owner_id: 1)
TeamSite.create!(name: "avengers_assemble", owner_id: 2)

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

Channel.create!(team_site_id: 2, title: "General") #1
Channel.create!(team_site_id: 2, title: "Big Battle in NYC a couple years ago") #2
Channel.create!(team_site_id: 2, title: "Favorite movies") #3
Channel.create!(team_site_id: 2, title: "Tony's bad fashion/facial hair choices") #4

Message.create(channel_id: 1, sender_id: 6, text: "I guess Jarvis made us a Quack since he gained a body and is no longer going to be our communication mechanism")
Message.create(channel_id: 1, sender_id: 8, text: "Sorry about that, guys. I've got a whole set of body issues now. Don't have the space to think about it, but I think Quack will be better than I was.")

Message.create(channel_id: 2, sender_id: 2, text: "that was a fun battle, very harrowing")
Message.create(channel_id: 2, sender_id: 5, text: "remember when hulk smashed loki? that was funny")
Message.create(channel_id: 2, sender_id: 2, text: "haha! don't make me angry because that's when you won't like me!")
Message.create(channel_id: 2, sender_id: 7, text: "y'all make me jealous. i saw some footage, looked hella fun")
Message.create(channel_id: 3, sender_id: 5, text: "I saw Love Actually")
Message.create(channel_id: 3, sender_id: 2, text: "i like classics, um, maybe casablanca!")
Message.create(channel_id: 3, sender_id: 6, text: "Both of those movies suck! Not enough bows!")

PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 3, text: "hey hulk")
PrivateMessage.create(team_site_id: 1, sender_id: 3, receiver_id: 2, text: "wassup cap")
PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 3, text: "new movie made a lot of money")
PrivateMessage.create(team_site_id: 1, sender_id: 3, receiver_id: 2, text: "sure did")
PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 3, text: "you got points? i do. gonna buy a boat with my money")
PrivateMessage.create(team_site_id: 1, sender_id: 3, receiver_id: 2, text: "yeah i bought one after the last movie, but i smashed it :(")
PrivateMessage.create(team_site_id: 1, sender_id: 2, receiver_id: 4, text: "hi black widow")
PrivateMessage.create(team_site_id: 1, sender_id: 4, receiver_id: 2, text: "hi cap")


TeamSiteMembership.create!(team_site_id: 1, user_id: 1)

Channel.create!(team_site_id: 1, title: "General") #5
Channel.create!(team_site_id: 1, title: "the_office") #6
Channel.create!(team_site_id: 1, title: "the_code") #7
Channel.create!(team_site_id: 1, title: "the_look") #8

User.create!(username: 'founder', email: "founder@coolcompany.com", password: "password") #15
User.create!(username: 'tech-guru', email: "tech-guru@coolcompany.com", password: "password") #16
User.create!(username: 'backend-specialist', email: "backend@coolcompany.com", password: "password") #17
User.create!(username: 'frontend', email: "frontend@coolcompany.com", password: "password") #18
User.create!(username: 'ux-designer', email: "ux@coolcompany.com", password: "password") #19
User.create!(username: 'hr-person', email: "hr1@coolcompany.com", password: "password") #20
User.create!(username: 'admin', email: "admin@coolcompany.com", password: "password") #21
User.create!(username: 'designer', email: "designer@coolcompany.com", password: "password") #22
User.create!(username: 'jrdev', email: "jrdev@coolcompany.com", password: "password") #23
User.create!(username: 'srdev', email: "srdev@coolcompany.com", password: "password") #24
User.create!(username: 'sales1', email: "sales1@coolcompany.com", password: "password") #25
User.create!(username: 'sales2', email: "sales2@coolcompany.com", password: "password") #26

TeamSiteMembership.create!(team_site_id: 1, user_id: 2)
TeamSiteMembership.create!(team_site_id: 1, user_id: 15)
TeamSiteMembership.create!(team_site_id: 1, user_id: 16)
TeamSiteMembership.create!(team_site_id: 1, user_id: 17)
TeamSiteMembership.create!(team_site_id: 1, user_id: 18)
TeamSiteMembership.create!(team_site_id: 1, user_id: 19)
TeamSiteMembership.create!(team_site_id: 1, user_id: 20)
TeamSiteMembership.create!(team_site_id: 1, user_id: 21)
TeamSiteMembership.create!(team_site_id: 1, user_id: 22)
TeamSiteMembership.create!(team_site_id: 1, user_id: 23)
TeamSiteMembership.create!(team_site_id: 1, user_id: 24)
TeamSiteMembership.create!(team_site_id: 1, user_id: 25)
TeamSiteMembership.create!(team_site_id: 1, user_id: 26)


Message.create(channel_id: 5, sender_id: 21, text: "I made us a Quack! It will help with team communication. Email/text hasn't been working for inter-office communication.")
Message.create(channel_id: 5, sender_id: 15, text: "Thanks admin!")

Message.create(channel_id: 6, sender_id: 21, text: "I made this channel so we talk about the office")
Message.create(channel_id: 6, sender_id: 26, text: "Can we put foosball in the breakroom?")
Message.create(channel_id: 6, sender_id: 23, text: "or darts maybe")
Message.create(channel_id: 6, sender_id: 22, text: "what about dry erase walls where we can sketch out ideas?")
Message.create(channel_id: 6, sender_id: 19, text: "love that idea, designer!")
Message.create(channel_id: 6, sender_id: 16, text: "yea, i've been working on an algorithm to improve our search and it would be nice to collaborate on it. +1 for the dry erase wall idea")
Message.create(channel_id: 6, sender_id: 15, text: "it's agreed then re: dry erase wall. admin, can you order?")
Message.create(channel_id: 6, sender_id: 21, text: "ordered. will arrive tuesday, but will be installed over the weekend.")

Message.create(channel_id: 7, sender_id: 16, text: "love the prototype you came up with, but i am noticing its slow on loading a new product")
Message.create(channel_id: 7, sender_id: 17, text: "yeah, thats a big query. currently writing a custom one that should be faster. i'll let you know when its done.")
Message.create(channel_id: 7, sender_id: 15, text: "Also I feel like when someone puts an item in the cart, the # of items in the cart changes, but that's all. not enough feedback")
Message.create(channel_id: 7, sender_id: 19, text: "Making wireframes for that cart change.")
Message.create(channel_id: 7, sender_id: 17, text: "okay guys, check out the product load. changed the sql query, looks faster on my end. thoughts?")
