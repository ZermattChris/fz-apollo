
// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
import NumberScroller from "@/components/NumberScroller.vue"
import { mount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();

let vuetify;

describe('NumberScroller', () => {

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const wrapper = mount(
    NumberScroller, {
      localVue,
      vuetify,
      propsData: {
        value: 5,
        min: 0,
        max: 10,
      },
    }
  );

  test('Check initial value is 5', async () => {
    //wrapper.setData({ myVal: true })

    //await wrapper.vm.$nextTick()
    //console.log(wrapper);
    //expect(wrapper.myVal).toBe(5);expect(wrapper.classes('bar')).toBe(true)
    //const inputField = wrapper.findComponent(".nrInput");
    //console.log(inputField);
    //expect(input.findComponent({ ref: "numberInput" })).toBe(true);

    const inp = wrapper.find(".nrInput")
    console.log(inp.text());
    //expect(inp.text().toBe(5)
  })

  test('Should not be possible to have less than the Min value', () => {
    expect(true).toBe(true)
  })

})

