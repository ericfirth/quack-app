# quack-proposal

[Heroku link][heroku]

[heroku]: https://quack-app.herokuapp.com/

## Minimum Viable Product
Quack is a clone of Slack built on Rails and Backbone. Users can:
- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create team sites
- [ ] Create channels on team sites
- [ ] Create messages on channels & to other users
- [ ] Join teams & channels on teams
- [ ] View channels they have joined
- [ ] Search for messages by text

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication & Team Site & Channel Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to log in & start or see
their a team sites and create channels. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Message Creation & Posting (3 days)
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

### Phase 5: Notifications & Mentions (2 days)
In this phase, I will need to add mentions. When someone types a message to a
channel that includes the username of a person in the team, that is a mention.
Mentions stay around. I will have to make a backbone composite view. This will
hold MessageShow subviews of each mention. In this phase I will also make notifications.
Notifications are created with mentions and new messages in private conversations.
They are deleted when viewed.

[Details][phase-five]


### Bonus Features
- [ ] infinite scroll
- [ ] favorites
- [ ] searching fetches the context (the two messages before and after the
  message that contains the search phrase).
- [ ] User avatars
- [ ] Typeahead search bar
- [ ] mentions can be made without using @ and searching for the username in text

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
