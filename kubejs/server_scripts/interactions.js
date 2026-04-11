// ============================================================
// interactions.js
// ============================================================
// Purpose:
// Handle primitive world interactions that are not recipes.
//
// Current behaviour:
// - Right-click gravel with a stick
// - Chance to receive a flint shard
// - Chance for the stick to break
// - Plays simple feedback sounds
// ============================================================

BlockEvents.rightClicked('minecraft:gravel', event => {
  if (event.item.id !== 'minecraft:stick') return

  const player = event.player
  const x = event.block.x + 0.5
  const y = event.block.y + 0.5
  const z = event.block.z + 0.5
  const pitch = 0.8 + Math.random() * 0.5

  player.swing()

  event.server.runCommandSilent(
    `playsound minecraft:block.gravel.hit block @a[x=${x},y=${y},z=${z},distance=..5] ${x} ${y} ${z} 0.2 ${pitch}`
  )

  // 20% chance to get a flint shard
  if (Math.random() < 0.20) {
    player.give('ascent:flint_shard')

    event.server.runCommandSilent(
      `playsound minecraft:entity.item.pickup player @a[x=${x},y=${y},z=${z},distance=..12] ${x} ${y} ${z} 0.5 1.2`
    )
  }

  // 10% chance the stick breaks
  if (Math.random() < 0.10) {
    event.item.count--
  }
})