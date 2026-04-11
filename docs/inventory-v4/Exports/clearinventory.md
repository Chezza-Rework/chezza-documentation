---
description: Delete all items and weapons from inventory
sidebar_position: 6
---

# clearInventory

:::note
ONLY serverside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**xPlayer** - `object` - ESX Player from `ESX.GetPlayerFromId(source)`
**deleteWeapons** - `boolean` - if you want to delete weapons too
**doNotDelete** - `array` - except specific items and weapons

```lua
exports.inventory:clearInventory(xPlayer, deleteWeapons, doNotDelete)
```

### Example
```lua
-- Will delete Weapons, except item bread and weapon pistol
exports.inventory:clearInventory(xPlayer, true, {'bread', 'WEAPON_PISTOL'})

-- Will not delete Weapons, except item bread and weapon pistol
exports.inventory:clearInventory(xPlayer, false, {'bread', 'WEAPON_PISTOL'})
```