// ============================================================
// ascent_constants.js
// Location: kubejs/startup_scripts/
// ============================================================
// Purpose:
// Define shared constants and helper functions once at startup,
// so they are available to all server scripts via global.ASCENT.
//
// Why this is in startup_scripts:
// - startup scripts load before server scripts
// - this makes global data much more reliable
// - avoids "Cannot read property ... from undefined" errors
// ============================================================

global.ASCENT = {
  // ----------------------------------------------------------
  // Master list of logs / wood blocks affected by primitive
  // progression rules.
  // ----------------------------------------------------------
  LOGS: [
    //Logs
    'minecraft:oak_log',
    'minecraft:spruce_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'minecraft:mangrove_log',
    'minecraft:cherry_log',

    //Woods
    'minecraft:oak_wood',
    'minecraft:spruce_wood',
    'minecraft:birch_wood',
    'minecraft:jungle_wood',
    'minecraft:acacia_wood',
    'minecraft:dark_oak_wood',
    'minecraft:mangrove_wood',
    'minecraft:cherry_wood'
  ],

  // ----------------------------------------------------------
  // Convert a log/wood block ID to its matching plank ID.
  // Example:
  // minecraft:oak_log -> minecraft:oak_planks
  // ----------------------------------------------------------
  getPlankFromLog(logId) {
    const [namespace, name] = logId.split(':')

    const woodType = name
      .replace('_log', '')
      .replace('_wood', '')

    return `${namespace}:${woodType}_planks`
  },
}