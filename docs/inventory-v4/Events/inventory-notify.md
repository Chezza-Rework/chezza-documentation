---
description: Notify the player with the inventory notification system
sidebar_position: 1
---

# inventory:notify

<span style={{color: 'red'}}>**Parameters**</span>\
**message** - `string` - The message you want to send\
**type** - `string` - There are 3 types `("info", "error", "success")`

### Clientside
```lua
TriggerEvent("inventory:notify", "Hello FiveM!", "success")
```

### Serverside
```lua
TriggerClientEvent('inventory:notify', source, "Hello FiveM!", "success")
```

## inventory:openInventory

This opens the own player inventory:
```lua
TriggerEvent('inventory:openInventory')
```

This opens a secondary inventory:
```lua
TriggerEvent('inventory:openInventory', {
    type = "stash", -- "type" in database
    id = "1", -- "identifier" in database
    title = "Chezza's Stash", 
    weight = 100, -- set to false for no weight,
    delay = 100,
    save = true -- save to database true or false
})
```