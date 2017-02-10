import * as types from '../mutation-types'
import { randomString } from '../../helpers/random.helper'

export const state = {
  description: 'eat this and live',
  fields: [{ indent: 0, name: 'ID', readonly: true, type: 'ObjectID' }],
  id: randomString(),
  index: 0,
  name: 'food',
  types: [
    { type: 'Array', value: 'Array' },
    { type: 'Blob', value: 'Blob' },
    { type: 'Bool', value: 'Bool' },
    { type: 'Date', value: 'Date' },
    { type: 'Null', value: 'Null' },
    { type: 'Number', value: 'Number' },
    { type: 'Object', value: 'Object' },
    { type: 'ObjectID', value: 'ObjectID' },
    { type: 'Regex', value: 'Regex' },
    { type: 'String', value: 'String' },
    { type: 'Symbol', value: 'Symbol' }
  ]
}

export const getters = {
  description: state => state.description,
  fields: state => state.fields,
  id: state => state.id,
  index: state => state.index,
  name: state => state.name,
  types: state => state.types
}

// effects
export const actions = {
}

export const mutations = {
  [types.ADD_FIELD](state) {
    state.fields.push({ indent: 0, name: '', type: 'String' })
  },

  [types.CHANGE_DESCRIPTION](state, { description }) {
    state.description = description
  },

  [types.CHANGE_ID](state) {
    state.id = randomString()
  },

  [types.CHANGE_NAME](state, { name }) {
    state.name = name
  },

  [types.DELETE_FIELD](state, { index }) {
    state.fields.splice(index, 1)
  },

  [types.UPDATE_FIELD](state, { index, field }) {
    Object.assign(state.fields[index], field)
  }
}
