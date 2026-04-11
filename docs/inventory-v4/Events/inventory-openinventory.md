---
description: Trigger to open the inventory
sidebar_position: 2
---

# inventory:openInventory

This opens the own player inventory:

```lua
TriggerEvent('inventory:openInventory')
```

This opens a secondary inventory:

```lua
TriggerEvent('inventory:openInventory', {
    type = "stash", -- "type" in database
    id = "1", -- "identifier" in database
    title = "Chezza's Stash", 
    weight = 100, -- set to false for no weight,
    delay = 100,
    save = true -- save to database true or false
})
```
