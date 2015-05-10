# Phase 2: Message Creation & Posting

## Rails
### Models

### Controllers
* Api::TeamSites (show, index)
* Api::Channels (create, destroy, update, show)
* Api::Message (create, destroy, update, show)

### Views
* channel.json.jbuilder
* message.json.jbuilder


## Backbone
### Models
* Team Site
* Channel
* Message

### Collections
* Team Sites
* Channels
* Messages

### Views
* TeamSiteIndex
* TeamSiteIndexItem
* TeamSiteShow (composite view, contains ChannelShow & ChannelIndex)
* TeamSiteForm
* ChannelShow (composite view, contains MessageShow & MessageForm)
* ChannelIndex (composite view, contains ChannelIndexItem)
* ChannelIndexItem
* ChannelForm
* UserIndex (compositive view, contains UserIndexItem)
* MessageShow
* MessageForm


## Gems/Libraries
