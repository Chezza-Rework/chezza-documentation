---
description: With this Event you can Lock the inventory to be opened again for X seconds.
sidebar_position: 5
---

# inventory:lockInventory

You can also add a reason but this is optional.

```lua
TriggerEvent('inventory:lockInventory', miliseconds)
```

This example will lock the inventory for 1 second.

### Clientside
```lua
TriggerEvent('inventory:lockInventory', 1000)
```

### Serverside
```lua
TriggerClientEvent('inventory:lockInventory', source, 1000)
```