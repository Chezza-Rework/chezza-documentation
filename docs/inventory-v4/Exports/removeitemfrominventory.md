---
description: Remove an item to a specific inventory
sidebar_position: 10
---

# RemoveItemFromInventory

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
exports.inventory:RemoveItemFromInventory(xPlayer, inv, item, count)
```

### Example

```lua
RegisterCommand('remove', function(source, args, raw)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local itemName = 'bread'
    local count = 1 -- This is also the weaponammo count
    
    local inv = {
        type = 'storage', -- type from database
        id = 'pd1', -- identifier from database
        save = true
    }
    
    local item = exports.inventory:GetItemInInventory(
        exports.inventory:getInventory(xPlayer, inv), itemName
    )
    
    if item then
        local success = exports.inventory:RemoveItemFromInventory(xPlayer, inv, item, count)
        if not success then print("Unable to remove item") end
    end
end)
```
