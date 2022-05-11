import Vue from 'vue'
import VueSocialSharing from 'vue-social-sharing'

// Internal Imports
import * as utils from '@/commons/utils'

// <ShareNetwork .../>
Vue.use(VueSocialSharing)

if (!globalThis.document) {
  global.document = {}
}

for (const k in utils) {
  if (Object.hasOwnProperty.call(utils, k)) {
    const v = utils[k]
    Vue.prototype['$' + k] = v
  }
}