---
description: With this Event you can Lock the inventory to be opened again
sidebar_position: 4
---

# inventory:lock

<span style={{color: 'red'}}>**Parameters**</span>\
**lock** - `boolean` - `(true / false)`

```lua
TriggerEvent('inventory:lock', lock)
```

### Clientside
```lua
TriggerEvent('inventory:lock', true)
```

### Serverside
```lua
TriggerClientEvent('inventory:lock', source, true)
```