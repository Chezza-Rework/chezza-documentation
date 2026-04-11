---
description: Open the house inventory from a different script
sidebar_position: 11
---

# inventory:openHouse

:::info
clientside AND serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**owner** - `string` - Owner of house (identifier)\
**id** - `string` - ID of house\
**title** - `string` - Title of the house\
**weight** - `number` - Weight of the house

```lua
TriggerEvent('inventory:openHouse', "steam:id", "house-1", "House Title", 300)
```

### Clientside
```lua
TriggerEvent('inventory:openHouse', ESX.GetPlayerData().identifier, "house-1", "House Title", 300)
```

### Serverside
You can use this:
```lua
TriggerClientEvent('inventory:openHouse', source, xPlayer.identifier, "house-1", "House Title", 300)
```
or you can use this:
```lua
xPlayer.triggerEvent("inventory:openShop", xPlayer.identifier, "house-1", "House Title", 300)
```