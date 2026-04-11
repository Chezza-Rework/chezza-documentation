---
description: Notification for Phone
sidebar_position: 1
---

# phone:notify

:::note
clientside AND serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**notification** - `object` - See below for notification object

<span style={{color: 'yellow'}}>**Notification Object**</span>\
**app** - `string` - App name\
**title** - `string` - 	Notification Title\
**content** - `string` - Notification Message\
**sound** - `string` - Sound File\
**canClose** - `boolean` - Can the user close the notification\
**sameApp** - `boolean` - Does the notification show when in the same app it's coming from \
**duration** - `number` - How long then notification stays open for, `-1` for unlimited \
**notification** - `table` - See example below

### Basic Notification
```lua
TriggerEvent('phone:notify', { app = 'messages', title = 'Test', content = 'Hello World'})
```

### Notification with Data
When the users click the notification it would trigger that NUI event/callback with the args mentioned.
```lua
TriggerEvent('phone:notify', { 
    app = 'messages', -- uses the messages app icon 
    title = 'Test', -- the header
    content = 'Hello World', -- the content/message
    data = {nuiEvent = 'test:respond', args = {id = '1'}} -- extra data
})
```