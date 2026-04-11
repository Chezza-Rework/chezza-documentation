---
title: Getting Started
description: Getting Started
sidebar_position: 1
---

# Installation

:::danger
The resource should be called `inventory`

:::warning
This script is designed & made for use with ESX Legacy.
Recommended Versions are ESX 1.7.5 and above.
:::

## Installation

* First unzip the inventory, then drag and drop the folder into your resources folder.
* Add `ensure inventory` to your `server.cfg`, make sure it is below `es_extended`.
* Head over to the `configs` folder and edit the files to your liking.
* SQL will be created automatically!
* That's it, enjoy! 🎉

### Dependencies

* [ESX Legacy](https://github.com/esx-framework/esx_core)
* [oxmysql](https://github.com/CommunityOx/oxmysql/releases)

## Adding Icons

All icons go into `web/dist/assets/items` folder.&#x20;

If you are planning on editing the Inventory UI make sure to also add your icons to the `web/public/assets/items` folder.

## Support for visn\_are (since inventory v4.3.7)

Go to `visn_are/script/custom/hooks.lua` and add the following Event:

```lua
TriggerEvent('inventory:lock', value)
```

It should look like this:

```lua
HookEventHandler(ENUM_HOOKABLE_EVENTS.UNCONSCIOUS_STATE_CHANGED, function(newState)
    if newState then -- Player is unconscious now
        TriggerEvent('inventory:lock', true)
    else -- Player is conscious now
        TriggerEvent('inventory:lock', false)
    end

    ResetThirstHungerStatus()
end)
```
