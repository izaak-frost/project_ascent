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

LootJS.modifiers(event => {
  // Leaves can drop sticks
  event
    .addBlockModifier('#minecraft:leaves')
    .randomChance(0.30)
    .addLoot('minecraft:stick')
})

LootJS.modifiers(event => {
  // Primitive stones drop stone chunks with primitive tools
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