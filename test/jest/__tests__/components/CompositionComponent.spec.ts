import { mount } from '@vue/test-utils'
// import { defineAsyncComponent } from 'vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '../../../../src/store/users'
import CompositionComponent from '../../../../src/components/CompositionComponent.vue'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

test('just test a component', () => {
  // CAN NOT THIS IMPORT
  // const CompositionComponent = defineAsyncComponent(() => import('../../../../src/components/CompositionComponent.vue'))
  const wrapper = mount(CompositionComponent, {
    global: {
      plugins: [createTestingPinia()]
    }
  })
  const store = useUserStore()
  store.error = 'NO DATA'
  expect(wrapper.html()).toContain('Users')
})
