---
description: Open the storage inventory from a different script
sidebar_position: 10
---

# inventory:openStorage

:::note
clientside AND serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**title** - `string` - Title of the storage container\
**id** - `string` - Unique id for the the storage container\
**weight** - `number` - Weight of the storage container\
**delay** - `number` - Open delay for the container\
**jobs** - `array` or `string` - Array of jobs that are allowed to access the container

### Clientside
```lua
TriggerEvent('inventory:openStorage', "Locker", "locker-1", 100, 1000, {"police", "ambulance"})
```

### Serverside
You can use this:
```lua
TriggerClientEvent('inventory:openStorage', source, "Locker", "locker-1", 100, 1000, {"police", "ambulance"})
```
or you can use this:
```lua
xPlayer.triggerEvent("inventory:openShop", "Locker", "locker-1", 100, 1000, {"police", "ambulance"})
```