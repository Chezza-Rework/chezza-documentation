---
description: Open a players inventory
sidebar_position: 6
---

# inventory:openPlayerInventory

:::info
clientside AND serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**playerId** - `number` - This should be the playerId\
**receiveWeapons** - `boolean` - `true` or`false`

### Clientside
```lua
TriggerEvent("inventory:openPlayerInventory", playerId, receiveWeapons)
```

**Example:**
```lua
local player, distance = ESX.Game.GetClosestPlayer()
if player ~= -1 and distance <= 3.0 then
    TriggerEvent('inventory:openPlayerInventory', GetPlayerServerId(player), true)
end
```

### Serverside
```lua
TriggerClientEvent("inventory:openPlayerInventory", source, playerId, receiveWeapons)
```

**Example:**

You can use this:
```lua
TriggerClientEvent("inventory:openPlayerInventory", source, xPlayer.source, true)
```

or you can use this:
```lua
xPlayer.triggerEvent("inventory:openPlayerInventory", xPlayer.source, true)
```