---
description: Open the crafting inventory from a different script
sidebar_position: 8
---

# inventory:openCrafting

:::note
clientside AND serverside
:::

:::warning
`Config.Crafting` must be set to `true`
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**title** - `string` - Title of the crafting inventory\
**items** - `array` - See below (Items Object)

<span style={{color: 'yellow'}}>**Parameters (Items Object)**</span>\
**type** - `string` - `item` or `weapon`\
**name** - `string` - Name of the item\
**count** - `number` - How many items you get after crafting\
**time** - `number` - How long does it take to craft the specified item\
**ingredients** - `array` - This are the items that you need to craft the specified item

### Example

```lua
local items = {
    {type = 'item', name = 'fishrod', count = 1, time = 5, ingredients = {
      {name = 'stick', count = 1},
      {name = 'hook', count = 1}
    }},
    -- copy and paste the table above in here for multiple items at this position
  }
```

### Clientside
```lua
TriggerEvent("inventory:openCrafting", title, items)
```

### Serverside
You can use this:
```lua
TriggerClientEvent("inventory:openCrafting", source, title, items)
```
or you can use this:
```lua
xPlayer.triggerEvent("inventory:openCrafting", title, items)
```