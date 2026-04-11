---
description: Notification for Phone
sidebar_position: 2
---

# phone:sendEmail

:::note
ONLY serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**target** - `number` - See below for notification object\
**email** - `object` - See below for email object

<span style={{color: 'yellow'}}>**Email Object**</span>\
**from** - `string` - Email Address/Sender
**content** - `string` - Email Content/Message

```lua
TriggerEvent('phone:sendEmail', 3, {
    from = 'admin@gtamail.com', 
    content = 'Server Message'
})
```