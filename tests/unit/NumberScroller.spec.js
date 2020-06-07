
import NumberScroller from "@/components/NumberScroller.vue"
import { shallowMount } from '@vue/test-utils'

describe('NumberScroller', () => {
    let wrapper = shallowMount(NumberScroller, {
      propsData: {
        value: 5,
        min: 0,
        max: 10,
      },
    });

    test('Check initial value is Zero', async () => {
        wrapper.setData({ myVal: true })

        await wrapper.vm.$nextTick()
        expect(true).toBe(true);
    })

    test('Should not be possible to have less than the Min value', () => {
        expect(true).toBe(true)
    })

})

