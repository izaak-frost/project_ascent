// ============================================================
// tags.js
// ============================================================
// Purpose:
// Define custom block tags used elsewhere in your scripts.
// ============================================================

ServerEvents.tags('block', event => {
  // Protected logs
  event.add('ascent:logs', global.ASCENT.LOGS)

  // Primitive stone tag
  event.add('ascent:primitive_stones', '#c:stones')
  event.add('ascent:primitive_stones', '#c:cobblestones')

  // Explicit extras
  event.add('ascent:primitive_stones', [
    'minecraft:deepslate',
    'minecraft:tuff',
    'minecraft:calcite'
  ])
})

ServerEvents.tags('item', event => {
  event.add('minecraft:axes', 'ascent:flint_hatchet')
  event.add('minecraft:pickaxe', 'ascent:flint_pickaxe')
})