---
description: Add an item to a player
sidebar_position: 11
---

# AddItemToPlayer

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
exports.inventory:AddItemToPlayer(playerId, item, count)
```

### Example

```lua
RegisterCommand('addItem', function(source, args, raw)
    local src = source
    local success = exports.inventory:AddItemToPlayer(src, 'bread', 2)
    print(success)
end)
```
