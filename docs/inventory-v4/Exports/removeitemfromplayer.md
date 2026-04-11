---
description: Removes an item to a player
sidebar_position: 12
---

# RemoveItemFromPlayer

:::note
ONLY serverside
:::

### Parameters

| Parameter | Description            |
| --------- | ---------------------- |
| playerId  | ServerId of the player |
| item      | Itemname               |
| count     | Itemcount              |

### Export

Returns `true` if success, returns `false` if failure

```lua
exports.inventory:RemoveItemFromPlayer(playerId, item, count)
```

### Example

```lua
RegisterCommand('removeItem', function(source, args, raw)
    local src = source
    local success = exports.inventory:RemoveItemFromPlayer(src, 'bread', 2)
    print(success)
end)
```
