---
description: Get an item inside of a specific inventory
sidebar_position: 8
---

# GetItemInInventory

:::note
ONLY serverside
:::

### Parameters

| Parameter | Description        |
| --------- | ------------------ |
| inventory | specific inventory |
| itemname  | itemname           |

```lua
exports.inventory:GetItemInInventory(inventory, itemname)
```

### Example

```lua
RegisterCommand('GetItemInInventory', function(source, args, raw)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local itemname = 'bread'
    
    local inv = {
        type = 'storage', -- type from database
        id = 'pd1', -- identifier from database
    }
    
    local item = exports.inventory:GetItemInInventory(
        exports.inventory:getInventory(xPlayer, inv), itemname
    )
    
    if item then
        -- Do something
    end
end)
```
