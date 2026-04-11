---
description: Listen for when the inventory opens
sidebar_position: 1
---

# inventory:open

### Clientside

```lua
AddEventHandler("inventory:open", function()
    print('Inventory opened')
end)
```

### Serverside

```lua
AddEventHandler("inventory:open", function()
    print('Inventory openedby ID: ' .. source)
end)
```
