---
description: See if player is able to carry an item or weapon with a specific count
sidebar_position: 5
---

# CanPlayerCarry

:::note
ONLY serverside
:::

### Parameters

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| xPlayer   | ESX Player from `ESX.GetPlayerFromId(source)` |
| item      | Object with `type` & `name`                   |
| count     | Item count as a `number`                      |

### Example

```lua
RegisterCommand('CanPlayerCarry', function(source, args, raw)
  local src = source
  local xPlayer = ESX.GetPlayerFromId(src)
  
  local canCarryItem = exports.inventory:CanPlayerCarry(xPlayer, {type = 'item_standard', name = 'apple'}, 10)
  local canCarryWeapon = exports.inventory:CanPlayerCarry(xPlayer, {type = 'item_weapon', name = 'WEAPON_PISTOL'})

  print(canCarryItem)
  print(canCarryWeapon)
end)
```
