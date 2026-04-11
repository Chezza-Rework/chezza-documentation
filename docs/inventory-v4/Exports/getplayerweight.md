---
description: Get the true player weight with weapon weight included
sidebar_position: 4
---

# getPlayerWeight

:::note
ONLY serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**playerId** - `number` or `string` - Server ID of the player

<span style={{color: 'green'}}>**Returns**</span>\
**playerWeight** - `number` - Weight of the Player

```lua
RegisterCommand('getPlayerWeight', function(source, args, raw)
  local src = source
  local playerWeight = exports.inventory:getPlayerWeight(src)

  print(playerWeight)
end)
```
