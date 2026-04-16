// ============================================================
// log_protection.js
// Server-side authority for log protection
// ============================================================

const LOG_TAG = 'ascent:logs'

function isValidAxe(item) {
  if (!item || item.isEmpty()) return false

  const id = String(item.id)
  return item.hasTag('minecraft:axes')
}

// Early cancel: helps stop invalid attempts immediately
BlockEvents.leftClicked(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return
  if (!block.hasTag(LOG_TAG)) return

  const item = player.mainHandItem
  if (!isValidAxe(item)) {
    event.cancel()
  }
})

// Authoritative server-side prevention
BlockEvents.broken(event => {
  const player = event.player
  const block = event.block

  if (!player || !block) return
  if (!block.hasTag(LOG_TAG)) return

  const item = player.mainHandItem
  if (!isValidAxe(item)) {
    event.cancel()
  }
})