---
description: With this Export you can Lock the inventory to be opened again for X seconds.
sidebar_position: 2
---

# LockInventory

:::note
ONLY clientside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**duration** - `number <miliseconds>` - Duration in miliseconds

```lua
exports.inventory:LockInventory(duration)

-- Example
exports.inventory:LockInventory(1000)
```