// ============================================================
// log_protection.js
// ============================================================
// Purpose:
// Prevent logs / wood blocks from being harvested without an axe.
//
// Why both left-click and broken events are used:
// - leftClicked: stops the player from properly interacting
//   with the block in the first place
// - broken: acts as a fallback in case the block still breaks
//   through another path or mod interaction
// ============================================================

// Stop bad attempts early
BlockEvents.leftClicked(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return
  if (!block.hasTag('ascent:logs')) return

  if (!global.ASCENT.isValidAxe(player)) {
    event.cancel()
    global.ASCENT.tellNeedAxe(player)
  }
})

// Fallback if something still manages to break
BlockEvents.broken(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return
  if (!block.hasTag('ascent:logs')) return

  if (!global.ASCENT.isValidAxe(player)) {
    event.cancel()
    global.ASCENT.tellNeedAxe(player)
  }
})