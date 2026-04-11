// ============================================================
// recipes.js
// ============================================================
// Purpose:
// Handle recipe removals and custom recipe additions.
// ============================================================

ServerEvents.recipes(event => {
  // Nerf logs/wood -> planks
  global.ASCENT.LOGS.forEach(log => {
    const planks = global.ASCENT.getPlankFromLog(log)

    event.remove({
      input: log,
      output: planks
    })

    event.shapeless(Item.of(planks, 2), [log])
  })

  // Flint pickaxe
  event.shaped('ascent:flint_pickaxe', [
    'FFF',
    ' S ',
    ' S '
  ], {
    F: 'ascent:flint_shard',
    S: 'minecraft:stick'
  })

  // Stone chunks -> cobblestone
  event.shaped('minecraft:cobblestone', [
    'SS',
    'SS'
  ], {
    S: 'ascent:stone_chunk'
  })
})