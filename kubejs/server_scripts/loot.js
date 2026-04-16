// ============================================================
// loot.js
// ============================================================
// Purpose:
// Handle LootJS-based block drop changes.
//
// Current behaviour:
// - Leaves have a chance to drop sticks
// - Primitive stones drop stone chunks when mined with
//   primitive tools
// ============================================================

// Leaves have a chance to drop sticks and plant fibre
LootJS.modifiers(event => {
  event
    .addBlockModifier('#minecraft:leaves')

    // Only when the player is breaking leaves with empty main hand
    .matchPlayerCustom(player => {
      const item = player.getMainHandItem()
      return item == null || item.isEmpty()
    })

    // Small chance for a stick
    .addLoot('minecraft:stick')
    .randomChance(0.20)

    // Small chance for plant fibre
    .addLoot('ascent:plant_fibre')
    .randomChance(0.35)
})

// Primitive stones drop stone chunks with primitive tools
LootJS.modifiers(event => {
  event
    .addBlockModifier('#ascent:primitive_stones')
    .matchTool([
      'ascent:flint_pickaxe',
      'minecraft:wooden_pickaxe'
    ])
    .removeLoot(Ingredient.all)
    .addLoot('ascent:stone_chunk')
    .randomChance(0.35)
    .addLoot('ascent:stone_chunk')
})