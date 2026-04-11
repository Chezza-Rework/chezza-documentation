---
description: Add an item to a specific inventory
sidebar_position: 9
---

# AddItemToInventory

:::note
ONLY serverside
:::

### Parameters

| Parameter | Description                        |
| --------- | ---------------------------------- |
| xPlayer   | ESX Player _(ESX.GetPlayerFromId)_ |
| item      | item as a table                    |
| count     | item count or ammo count           |
| inv       | inventory                          |

```lua
exports.inventory:AddItemToInventory(xPlayer, item, count, inv)
```

### Example

```lua
RegisterCommand('add', function(source, args, raw)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local itemName = 'bread'
    local count = 1 -- This is also the weaponammo count
    
    local inv = {
        type = 'storage', -- type from database
        id = 'pd1', -- identifier from database
        save = true
    }
    
    local item = {
        type = 'item_standard', -- 'item_standard' or 'item_weapon'
        name = itemName
    }
    
    exports.inventory:AddItemToInventory(xPlayer, item, count, inv)
end)
```
