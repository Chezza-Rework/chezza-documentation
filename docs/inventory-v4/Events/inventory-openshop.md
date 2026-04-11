---
description: Open the shop inventory from a different script
sidebar_position: 9
---

# inventory:openShop

:::info
clientside AND serverside
:::

:::warning
`Config.Shops` must be set to `true`
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**title** - `string` - Title of the shop\
**items** - `array` - See below (Items Object)

<span style={{color: 'yellow'}}>**Parameters (Item Object)**</span>\
**type** - `string` - `item` or `weapon`\
**name** - `string` - Name of the item\
**method** - `string` - `money`, `bank` or `black_money`\
**price** - `number` or `boolean` - Set false to disable buying\
**sellPrice** - `number` or `boolean` - Set false to disable selling

```lua
local items = {
  {type = 'item', name = 'apple', method = 'money', price = 10, sellPrice = 3},
  {type = 'item', name = 'strawberry', method = 'bank', price = false, sellPrice = 3},
  {type = 'item', name = 'cherry', method = 'black_money', price = 10, sellPrice = false},
}
```

### Clientside

```lua
TriggerEvent("inventory:openShop", title, items)
```

### Serverside
You can use this:
```lua
TriggerClientEvent("inventory:openShop", source, title, items)
```
or you can use this:
```lua
xPlayer.triggerEvent("inventory:openShop", title, items)
```