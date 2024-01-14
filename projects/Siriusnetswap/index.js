const {uniTvlExport} = require('../helper/calculateUniTvl.js')

const factory = '0xb6f92926227118998F52a7e1768b77c437B30705'

module.exports = {
  Siriusnet:{
    tvl: uniTvlExport(factory, 'Siriusnet', true),
  },
}
