//Prevents damaging/destroying protected logs
function isInvalidLogTool(player) {
  const item = player.mainHandItem
  if (!item || item.isEmpty()) return true

  const id = `${item.id}`
  return !id.endsWith('_axe')
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

BlockEvents.leftClicked(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return
  if (!block.hasTag('ascent:logs')) return

  const item = player.mainHandItem

  if (!item || item.isEmpty() || !(`${item.id}`.endsWith('_axe'))) {
    event.cancel()
  }
})