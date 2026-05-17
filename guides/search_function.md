---
title: Search Function for jobs [V3 / V4]
description: Search Function for jobs
sidebar_position: 3
---

# Search Function for jobs [V3 / V4]

In order to change the default search function from `esx_policejob` head over to `esx_policejob/client/main.lua` `~285`

**Look for this:**

```lua
elseif action == 'search' then
  OpenBodySearchMenu(closestPlayer)
```

**Replace the code above with this one:**
```lua
elseif action == 'search' then
  TriggerEvent('inventory:openPlayerInventory', GetPlayerServerId(closestPlayer))
```

**For V4 replace with this one if you want to receive weapons:**
```lua
elseif action == 'search' then
  TriggerEvent('inventory:openPlayerInventory', GetPlayerServerId(closestPlayer), true)
```