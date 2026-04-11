---
description: Listen for item removal
sidebar_position: 3
---

# inventory:onItemRemove

:::note
ONLY clientside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**item** - `table <name, label>` - The item that got removed from player

```lua
RegisterNetEvent('inventory:onItemRemove', function(item)
    print('Item ' .. item.name .. ' was removed')
end)
```
