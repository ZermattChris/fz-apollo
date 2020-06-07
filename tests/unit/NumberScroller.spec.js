
import NumberScroller from "@/components/NumberScroller.vue"
import { shallowMount } from '@vue/test-utils'

describe('NumberScroller', () => {
    let wrapper = shallowMount(NumberScroller)

    // beforeEach(
    //     Vue.use(vuetify)
    // )

    test('Check initial value is Zero', async () => {
        wrapper.setData({ myVal: true })

        await wrapper.vm.$nextTick()
        expect(wrapper).toBe(true)
    })

    test('Should not be possible to have less than the Min value', () => {
        expect(true).toBe(true)
    })

})

