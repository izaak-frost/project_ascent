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

  // Flint Shards -> Flint
  event.shapeless(
    Item.of('minecraft:flint', 1),
      [
        '9x ascent:flint_shard'
      ]
  )

  // Flint -> Flint Shards
  event.shapeless(
    Item.of('ascent:flint_shard', 9),
      [
        'minecraft:flint'
      ]
  )

  // Flint Shards -> Flint
  event.shaped('ascent:flint_pickaxe', [
      'fFf',
      ' S ',
      ' S '
    ], {
      F: 'minecraft:flint',
      f: 'ascent:flint_shard',
      S: 'minecraft:stick'
    })

  // Stone chunks -> cobblestone
  event.shaped('minecraft:cobblestone', [
    'SS',
    'SS'
  ], {
    S: 'ascent:stone_chunk'
  })

  // Furnace now made with 1x Compressed Cobblestone
  event.remove({ output: 'minecraft:furnace' })
  event.shaped(
    Item.of('minecraft:furnace',1),
      [
        'CCC',
        'C C',
        'CCC'
      ],
      {
        C: 'allthecompressed:cobblestone_1x'

      }
  )
})