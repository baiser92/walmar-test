import React from 'react'
import {shallow, configure} from 'enzyme'
import {Input} from '../../../components/SearchBar/styled'
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from '../../../components/SearchBar'
import 'regenerator-runtime/runtime'


configure({adapter: new Adapter()})

describe('SearchBar component test', () => {


    test('should set the correct initial states', async () => {
      const searchBarComponent = shallow(
        <SearchBar handleText={jest.fn()}></SearchBar> ,
      )
      expect(searchBarComponent.instance().state.submitDisabled).toBe(true)
      expect(searchBarComponent.instance().state.text).toEqual("")
      expect(searchBarComponent.find(Input).length).toEqual(1)
      expect(searchBarComponent.find("#search-button").length).toEqual(1)
      expect(searchBarComponent.find("#clear-text").length).toEqual(1)
    })

    test('should call handleText function 1 time', async () => {
      const spy = jest.fn()
      const searchBarComponent = shallow(
        <SearchBar handleText={spy}></SearchBar> ,
      )
      searchBarComponent.find("#search-button").simulate('click')
      expect(spy).toBeCalledTimes(1)
    })

    test('should call clearText function 1 time and should update the states', async () => {
      const searchBarComponent = shallow(
        <SearchBar handleText={jest.fn()}></SearchBar> ,
      )
      await searchBarComponent.instance().setState({text: 'hello world', submitDisabled: false })
      expect(searchBarComponent.instance().state.text).toEqual("hello world")
      expect(searchBarComponent.instance().state.submitDisabled).toBeFalsy()


      searchBarComponent.find("#clear-text").simulate('click')
      expect(searchBarComponent.instance().state.submitDisabled).toBeTruthy()
      expect(searchBarComponent.instance().state.text).toEqual("")
    })

    test('should set submitDisabled state to false', async () => {
     const spy = jest.fn()
     const event = {
        preventDefault(){},
        target: {value: "hello world"}
      }
      const searchBarComponent = shallow(
        <SearchBar handleText={spy}></SearchBar> ,
      )
      await searchBarComponent.instance().setState({submitDisabled: true })
      expect(searchBarComponent.instance().state.submitDisabled).toBeTruthy()
      searchBarComponent.find(Input).simulate('change', event)
      expect(searchBarComponent.instance().state.submitDisabled).toBeFalsy()
    })

    test('should set submitDisabled state to true', async () => {
      const spy = jest.fn()
      const event = {
         preventDefault(){},
         target: {value: "h"}
       }
       const searchBarComponent = shallow(
         <SearchBar handleText={spy}></SearchBar> ,
       )
       await searchBarComponent.instance().setState({submitDisabled: false })
       expect(searchBarComponent.instance().state.submitDisabled).toBeFalsy()
       searchBarComponent.find(Input).simulate('change', event)
       expect(searchBarComponent.instance().state.submitDisabled).toBeTruthy()
     })



})
