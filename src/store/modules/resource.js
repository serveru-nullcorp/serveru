import * as types from '../mutation-types'
import { randomString } from '../../helpers/random.helper'

export const state = {
  description: 'eat this and live',
  fields: [{ name: 'ID', readonly: true, type: 'ObjectID' }],
  id: randomString(),
  name: 'food'
}

export const getters = {
  description: state => state.description,
  fields: state => state.fields,
  id: state => state.id,
  name: state => state.name
}

// effects
export const actions = {
}

export const mutations = {
  [types.CHANGE_ID](state) {
    state.id = randomString()
  },

  [types.CHANGE_NAME](state, { name }) {
    state.name = name
  }
}
