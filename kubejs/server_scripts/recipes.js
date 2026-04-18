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
          '4x ascent:flint_shard'
        ]
    )

    // Flint -> Flint Shards
    event.shapeless(
      Item.of('ascent:flint_shard', 4),
        [
          'minecraft:flint'
        ]
    )

    // Flint Pickaxe
    event.shaped('ascent:flint_pickaxe', [
        'fFf',
        ' S ',
        ' S '
      ], {
        F: 'minecraft:flint',
        f: 'ascent:flint_shard',
        S: 'minecraft:stick'
      })

    // Flint Hatchet
    event.shaped('ascent:flint_hatchet', [
        'Ff',
        'fS'
      ], {
        F: 'minecraft:flint',
        f: 'ascent:plant_fibre',
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

    // Crafting table now made with 4x log
    event.remove({ output: 'minecraft:furnace' })
    event.shaped(
      Item.of('minecraft:crafting_table',1),
        [
          'LL',
          'LL',
        ],
        {
          L: '#minecraft:logs'
        }
    )

  // Remove the Industrial Foregoing recipes for Iron & Gold Gears (Diamond Gears are acceptable)
    event.remove({ output: 'industrialforegoing:iron_gear' })
    event.remove({ output: 'industrialforegoing:gold_gear' })


  }
) // THIS IS THE END OF THE BASIC ServerEvents MODULE

ServerEvents.recipes(event => {
  // Remove any recipe that outputs Silent Gear tools/armour
  // and uses vanilla gear as an ingredient.
    const vanillaInputs = [
      'minecraft:wooden_sword',
      'minecraft:wooden_pickaxe',
      'minecraft:wooden_axe',
      'minecraft:wooden_shovel',
      'minecraft:wooden_hoe',

      'minecraft:stone_sword',
      'minecraft:stone_pickaxe',
      'minecraft:stone_axe',
      'minecraft:stone_shovel',
      'minecraft:stone_hoe',

      'minecraft:iron_sword',
      'minecraft:iron_pickaxe',
      'minecraft:iron_axe',
      'minecraft:iron_shovel',
      'minecraft:iron_hoe',

      'minecraft:golden_sword',
      'minecraft:golden_pickaxe',
      'minecraft:golden_axe',
      'minecraft:golden_shovel',
      'minecraft:golden_hoe',

      'minecraft:diamond_sword',
      'minecraft:diamond_pickaxe',
      'minecraft:diamond_axe',
      'minecraft:diamond_shovel',
      'minecraft:diamond_hoe',

      'minecraft:netherite_sword',
      'minecraft:netherite_pickaxe',
      'minecraft:netherite_axe',
      'minecraft:netherite_shovel',
      'minecraft:netherite_hoe',

      'minecraft:leather_helmet',
      'minecraft:leather_chestplate',
      'minecraft:leather_leggings',
      'minecraft:leather_boots',

      'minecraft:chainmail_helmet',
      'minecraft:chainmail_chestplate',
      'minecraft:chainmail_leggings',
      'minecraft:chainmail_boots',

      'minecraft:iron_helmet',
      'minecraft:iron_chestplate',
      'minecraft:iron_leggings',
      'minecraft:iron_boots',

      'minecraft:golden_helmet',
      'minecraft:golden_chestplate',
      'minecraft:golden_leggings',
      'minecraft:golden_boots',

      'minecraft:diamond_helmet',
      'minecraft:diamond_chestplate',
      'minecraft:diamond_leggings',
      'minecraft:diamond_boots',

      'minecraft:netherite_helmet',
      'minecraft:netherite_chestplate',
      'minecraft:netherite_leggings',
      'minecraft:netherite_boots'
    ]

    vanillaInputs.forEach(id => {
      event.remove({
        mod: 'silentgear',
        input: id
      })
    })
  }
)