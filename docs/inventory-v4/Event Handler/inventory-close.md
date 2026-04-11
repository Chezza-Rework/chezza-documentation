---
description: Listen for when the inventory closes
sidebar_position: 2
---

# inventory:close

### Clientside

```lua
AddEventHandler("inventory:close", function()
    print('Inventory closed')
end)
```

### Serverside

```lua
AddEventHandler("inventory:close", function()
    print('Inventory closed by ID: ' .. source
end)
```
