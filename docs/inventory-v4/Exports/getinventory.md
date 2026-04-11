---
description: Get the inventory of a specific inventory
sidebar_position: 7
---

# getInventory

:::note
ONLY serverside
:::

### Parameters

| Parameter | Description                        |
| --------- | ---------------------------------- |
| xPlayer   | ESX Player _(ESX.GetPlayerFromId)_ |
| inv       | inventory                          |

```lua
exports.inventory:getInventory(xPlayer, inv)
```

### Example

```lua
RegisterCommand('getInventory', function(source, args, raw)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    
    local inv = {
        type = 'storage', -- type from database
        id = 'pd1', -- identifier from database
    }
    
    local inventory = exports.inventory:getInventory(xPlayer, inv)
end)
```
