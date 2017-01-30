import * as types from '../mutation-types'
import { randomString } from '../../helpers/random.helper'

export const state = {
  description: 'eat this and live',
  fields: [{ name: 'ID', readonly: true, storedAs: '_id', type: 'ObjectID' }],
  id: randomString(),
  name: 'food'
}

export const getters = {
  description: state => state.description,
  id: state => state.id,
  name: state => state.name
}

// actions & effects
export const actions = {
  changeID({commit}) {
    commit(types.CHANGE_ID)
  }
}

export const mutations = {
  [types.CHANGE_ID](state) {
    state.id = randomString()
  }
}
