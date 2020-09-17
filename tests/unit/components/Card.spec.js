import expect from 'expect'
import {mount} from "@vue/test-utils"
import Card from "../../../src/components/Card"
import ExampleCar from "../../Data"

describe('Card', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Card, {
            propsData: {
                car: ExampleCar
            }
        })
    })

    test('It should shos the model name', () => {
        expect(wrapper.find('[data-locator="name"]').html()).toContain('Model A')
    })

    test('It should show the correct amount of seats', () => {
        expect(wrapper.find('[data-locator="seats"]').html()).toContain('2')
    })

    test('It shows the correct icon if the car is a convertible', () => {
        expect(wrapper.find('[data-locator="tick"]').exists()).toBe(true)
        expect(wrapper.find('[data-locator="cross"]').exists()).toBe(false)
    })

    test('It shows the correct icon if the car is not a convertible', () => {
        let wrapper = mount(Card, {
            propsData: {
                car: {
                    ...ExampleCar,
                    convertible: false
                }
            }
        })

        expect(wrapper.find('[data-locator="tick"]').exists()).toBe(false)
        expect(wrapper.find('[data-locator="cross"]').exists()).toBe(true)
    })

    test('It should show the correct amount of trims available', () => {
        expect(wrapper.findAll('[data-locator="trim"]').length).toEqual(3)
    })

    test('It should show the correct amount of paints available', () => {
        expect(wrapper.findAll('[data-locator="paint"]').length).toEqual(3)
    })

    test('It should show the correct amount of wheels available', () => {
        expect(wrapper.findAll('[data-locator="wheel"]').length).toEqual(1)
    })

    test('It formats the price correctly', () => {
        expect(wrapper.find('[data-locator="price"]').html()).toContain('£25000')
    })
})
