import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import LoginToTable from '@/components/LoginToTable.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('LoginToTable test', () => {
  const vuetify = new Vuetify()
  const wrapper = mount(LoginToTable, {
    localVue,
    vuetify,
    propsData: {
      message: 'Welcome to cara de caca',
    },
  })

  it('Check LoginToTable', () => {
    expect(wrapper.text()).toContain('Entrar')
    expect(wrapper.text()).toContain('Welcome to cara de caca')
    expect(wrapper.find('.v-form').exists()).toBe(true)
    expect(wrapper.findAll('.v-text-field').length).toBe(2)
  })
})
