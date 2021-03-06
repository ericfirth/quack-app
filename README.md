# Quack

[Live Link][heroku]

[heroku]: http://www.quack-app.net/

## Minimum Viable Product
Quack is a clone of Slack built on Rails and Backbone. Users can:
- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create team sites
- [x] Create channels on team sites
- [x] Join channels on team sites
- [x] Create messages on channels
- [x] Read all messages on channel
- [x] Create & read private messages to other users
- [x] Invite others to join Team Site
- [x] OAuth - Google
- [x] Search for messages by text

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1 (complete): User Authentication & Team Site Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to log in & start or see
their a team sites and create channels. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2 (complete): Channel & Message Creation & Posting (3 days)
I will begin add API routes to serve JSON and begin building the app as a single page
backbone application. The first step to be able to post messages and have messages
belong to a channel or to a conversation between two people. By the end of this phase,
users will be able to join or create channels and conversations and then post
and read the messages that belong to those conversations.

[Details][phase-two]

### Phase 3: Files and formatted messages (2 days)
In this phase I will use third party libraries to improve both the displaying and
creation of messages. I will allow messages to be formatted by using a Markdown
editor for my MessageForm and I will need to make sure Markdown is escaped in the
MessageShow. I will also use Filepicker to be able to upload files to channels
and conversations

[Details][phase-three]

### Phase 4: Search for Messages (2 days)
In this phase I will need to add search routes to the Message controller. On the
backbone side, there will be a SearchResults composite view that has MessageShow
subview. This view will look similar to the channel composite view.  

[Details][phase-four]

### Phase 5: Scrolling (2 days)
In this phase, I will need to make the feed act the way Slack's feed does. Messages
start at the bottom and work their way up. If there aren't enough messages, the feed
is aligned to the bottom of the page. Also a scroll up should fetch more messages
with pagination that the user doesn't notice.

[Details][phase-five]


### Bonus Features
- [x] infinite scroll
- [x] OAuth in Facebook & Twitter
- [ ] conversation show in a single SQL query rather than 4
- [ ] searching fetches the context (the two messages before and after the
  message that contains the search phrase).
- [x] User avatars
- [ ] Typeahead search bar
- [ ] mentions can be made without using @ and searching for the username in text

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
