import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import Game from '@/components/Game.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('Initial Game test', () => {
  const vuetify = new Vuetify()
  const wrapper = mount(Game, {
    localVue,
    vuetify,
    propsData: {
      username: 'test_user',
      tableName: 'some_table',
      players: [],
      started: false,
      playedCards: [],
      deck: 0,
      usernameTurn: null,
      clockwise: true,
      finishedUsernames: [],
      lastAction: 'test_user joined the table',
      lastLastAction: 'table created',
    },
  })

  it('Initial Game', () => {
    expect(wrapper.text()).toContain('Repartir cartas')
    expect(wrapper.text()).toContain('test_user joined the table')
    expect(wrapper.text()).toContain('table created')
    expect(wrapper.text()).not.toContain('Ganadores')
    expect(wrapper.vm.$data.otherPlayers).toEqual([])
    expect(wrapper.vm.$data.currentPlayer).toEqual(null)
  })
})
