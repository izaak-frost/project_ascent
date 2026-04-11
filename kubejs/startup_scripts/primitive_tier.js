// ==============================
// Custom primitive tool tier
// ==============================
// Note: custom tiers are startup-only and require a full restart.
ItemEvents.toolTierRegistry(event => {
  event.add('primitive', tier => {
    // How many uses the tool gets before breaking
    tier.uses = 16

    // Mining speed
    tier.speed = 0.5

    // Extra attack damage bonus
    tier.attackDamageBonus = 1

    // How enchantable the tool is
    tier.enchantmentValue = 14
  })
})


// ==============================
// Custom primitive items
// ==============================
StartupEvents.registry('item', event => {
  // Set namespace for everything in this file
  event.create('ascent:stone_chunk')
    .displayName('Stone Chunk')
    .texture('ascent:item/stone_chunk')

  event.create('ascent:flint_shard')
    .displayName('Flint Shard')
    .texture('ascent:item/flint_shard')

  event.create('ascent:flint_pickaxe', 'pickaxe')
    .displayName('Flint Pickaxe')
    .tier('primitive')
    .texture('ascent:item/flint_pickaxe')
})