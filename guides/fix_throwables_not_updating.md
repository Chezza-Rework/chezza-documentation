---
title: Fix for throwables not updating
description: Fix for throwables not updating
sidebar_position: 4
---

# Fix for throwables not updating

In order to fix this issue head over to `es_extended/client/main.lua` `~385`

**Look for this:**
```lua
if IsPedArmed(ESX.PlayerData.ped, 4) then
  if IsPedShooting(ESX.PlayerData.ped) then
    local _,weaponHash = GetCurrentPedWeapon(ESX.PlayerData.ped, true)
    local weapon = ESX.GetWeaponFromHash(weaponHash)

    if weapon then
        currentWeapon.name = weapon.name
        currentWeapon.hash = weaponHash    
        currentWeapon.timer = 100 * sleep        
    end
  end
else
  sleep = 200
end
```

**Replace the code above with this one.**
```lua
if IsPedShooting(ESX.PlayerData.ped) then
  local _,weaponHash = GetCurrentPedWeapon(ESX.PlayerData.ped, true)
  local weapon = ESX.GetWeaponFromHash(weaponHash)

  if weapon then
    currentWeapon.name = weapon.name
    currentWeapon.hash = weaponHash    
    currentWeapon.timer = 100 * sleep        
  end
end
```