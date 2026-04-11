---
title: Getting Started
description: Getting Started
sidebar_position: 1
---

# Installation

:::danger
The resource should be called `phone`

:::warning
The SQL file will **DELETE** the `phones` table if it already exists, this is required for installation.
:::

## Installation

* First unzip the phone, then drag and drop the folder into your resources folder.
* Add `ensure phone` to your `server.cfg`, make sure it is below `mysql-async`.
* Import the `sql.sql` file into your database. (Read notice above)
* Head over to the `config` folder and edit the files to your liking.
* That's it, enjoy! 🎉

### Dependencies

* pma-voice / mumble-voip / saltychat
* [mysql-async](https://github.com/brouznouf/fivem-mysql-async) / [oxmysql](https://github.com/overextended/oxmysql)

## Changing Icons

1. Navigate over to `phone/web/dist/icons`
2. Replace the icon with your own, making sure it ends with that `.svg`

:::note
Note, if you are planning on changing any source code make sure to also replace icons in the `phone/web/public/icons` folder also.
:::

## Adding Backgrounds

1. Navigate over to `phone/web/dist/backgrounds`
2. Add your chosen background in this folder.
3. Navigate over to `phone/config/config.lua`
4. Add the filename of your background into `Config.DefaultBackgrounds`

:::note
Note, if you are planning on changing any source code make sure to also add your backgrounds in the `phone/web/public/backgrounds` folder also.
:::

```lua
-- Before
Config.DefaultBackgrounds = { "default.jpg", "city.gif" }

-- After
onfig.DefaultBackgrounds = { "default.jpg", "city.gif", "test.png" }
```

## Adding Ringtones

1. Navigate over to `phone/web/dist/sounds/ringtones`
2. Add your chosen ringtone in this folder.
3. Navigate over to `phone/config/config.lua`
4. Add the details for your ringtone into `Config.Ringtones`, check example below.

:::note
Note, if you are planning on changing any source code make sure to also add your ringtones in the `phone/web/public/sounds/ringtones` folder also.
:::

:::warning
Make sure the `id` property is unique
:::

```lua
-- Before
Config.Ringtones = {
  { id = "default", file = "ringtones/rick.mp3", label = "Rick" },
  { id = "boujee", file = "ringtones/boujee.mp3", label = "Boujee" },
  { id = "discord", file = "ringtones/discord.mp3", label = "Discord" },
}

-- After
Config.Ringtones = {
  { id = "default", file = "ringtones/rick.mp3", label = "Rick" },
  { id = "boujee", file = "ringtones/boujee.mp3", label = "Boujee" },
  { id = "discord", file = "ringtones/discord.mp3", label = "Discord" },
  { id = "test", file = "ringtones/test.mp3", label = "Test" },
}
```

## Adding Default Contacts

Navigate over to `phone/config/config.lua` and open with your chosen text editor.

| Parameter         | Type      | Description                                                                                                |
| ----------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| name              | `string`  | Display name/label                                                                                         |
| number            | `string`  | Job Name                                                                                                   |
| connectToDispatch | `boolean` | If true, allows players with the specified job to receive notifications and dispatches in the dispatch app |

```lua
Config.DefaultContacts = {
  { name = "Police", number = "police", connectToDispatch = true },
  { name = "Medic", number = "ambulance", connectToDispatch = true },
}
```
