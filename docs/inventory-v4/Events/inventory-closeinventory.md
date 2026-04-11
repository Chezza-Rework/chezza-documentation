---
description: Trigger to close the inventory
sidebar_position: 3
---

# inventory:closeInventory

You can also add a reason but this is optional.
```lua
TriggerEvent('inventory:closeInventory', reason)
```

### Clientside
```lua
TriggerEvent('inventory:closeInventory', "This is a reason Notify")
```

### Serverside
```lua
TriggerClientEvent('inventory:closeInventory', source, "This is a reason Notify")
```