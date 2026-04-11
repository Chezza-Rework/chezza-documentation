---
description: Open the trunk or glovebox inventory from a different script
sidebar_position: 7
---

# inventory:openTrunkGlovebox

:::info
clientside AND serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**type** - `string` - `trunk` or `glovebox`\
**plate** - `string` - plate of the vehicle\
**weight** - `number` - weight of the trunk or glovebox

### Clientside

```lua
TriggerEvent('inventory:openTrunkGlovebox', 'trunk', GetVehicleNumberPlateText(vehicle), 100)
TriggerEvent('inventory:openTrunkGlovebox', 'glovebox', GetVehicleNumberPlateText(vehicle), 10)
```

### Serverside
```lua
-- serverside
TriggerEvent('inventory:openTrunkGlovebox', source, 'trunk', 'ABC 123', 100)
TriggerEvent('inventory:openTrunkGlovebox', source, 'glovebox', 'ABC 123', 10)
```