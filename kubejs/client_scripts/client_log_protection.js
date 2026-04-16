function isInvalidLogTool(player) {
  const item = player.mainHandItem
  if (!item || item.isEmpty()) return true

  return !item.hasTag('minecraft:axes')
}

BlockEvents.leftClicked(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return
  if (!block.hasTag('ascent:logs')) return

  if (isInvalidLogTool(player)) {
    event.cancel()
  }
})