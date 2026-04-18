// Replace all Industrial Foregoing Iron/Gold Gears with FTB Materials equivalents
ServerEvents.recipes(event => {
  const map = {
    'industrialforegoing:iron_gear': 'ftbmaterials:iron_gear',
    'industrialforegoing:gold_gear': 'ftbmaterials:gold_gear'
  }

  Object.entries(map).forEach(([from, to]) => {
    event.remove({ output: from })
    event.replaceInput({}, from, to)
    event.replaceOutput({}, from, to)
  })
})

ServerEvents.tags('item', event => {
  event.removeAll('c:gears/iron')
  event.removeAll('c:gears/gold')

  event.add('c:gears/iron', 'ftbmaterials:iron_gear')
  event.add('c:gears/gold', 'ftbmaterials:gold_gear')
})

ServerEvents.recipes(event => {
  event.remove({ type: 'productivemetalworks:item_casting', output: '#c:gears' })
  event.remove({ type: 'productivemetalworks:item_casting', output: '#forge:gears' })
  event.remove({ output: 'productivemetalworks:gear_cast' })
  event.remove({ input: 'productivemetalworks:gear_cast' })
})