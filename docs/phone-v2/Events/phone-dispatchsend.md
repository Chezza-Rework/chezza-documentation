---
description: Notification for Phone
sidebar_position: 3
---

# dispatch:send

:::note
ONLY clientside
:::

<span style={{color: 'red'}}>**Parameters**</span>\
**job** - `string` - job name \
**msg** - `string` - Content\
**coords** - `vector` - Coordinates (X, Y)

```lua
TriggerServerEvent('dispatch:send', 'police', 'Hello There', GetEntityCoords(PlayerPedId()))
```