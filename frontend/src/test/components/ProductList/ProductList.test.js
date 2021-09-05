import React from 'react'
import sinon from 'sinon'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'regenerator-runtime/runtime'
import ProductList from '../../../components/ProductList';
import ClientApi from '../../../clients/ClientApi'
import { ContainerError } from '../../../components/ProductList/styled'
import ProductCard from '../../../components/ProductCard'


configure({adapter: new Adapter()})


describe('ProductList component test', () => {
    let sinonSandbox
    beforeEach(() => {
        sinonSandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sinonSandbox.restore()
    })
    test('should set the correct initial states', async () => {
        const productList = shallow(
           <ProductList /> ,
        )
        expect(productList.instance().state.products).toEqual([])
        expect(productList.instance().state.query).toEqual("")
        
      })

      test('should call searchProduct function 1 time and should update the states', async () => {
        const products = [
            {
                id: 1,
                idProduct: 1,
                brand: "tvLG",
                description: "smart TV",
                image: "image",
                price: 20000,
                discountPrice: 10000,
                isDiscount: true
            }
        ]
        const spy = sinonSandbox.stub(ClientApi.prototype, 'GetProduct').returns(Promise.resolve(products))
        const productList = shallow(
            <ProductList /> ,
         )
        await productList.instance().searchProduct("tvLG")
        sinon.assert.calledOnce(spy)
        expect(productList.instance().state.query).toEqual("tvLG")
        expect(productList.instance().state.products.length).toBe(1)
        expect(productList.instance().state.products).toEqual(products)

      })



      test('should render container product', async () => {
        const products = [
            {
                id: 1,
                idProduct: 1,
                brand: "tvLG",
                description: "smart TV",
                image: "image",
                price: 20000,
                discountPrice: 10000,
                isDiscount: true
            },
            {
                id: 2,
                idProduct: 1,
                brand: "tvLG",
                description: "smart TV 2",
                image: "image 2",
                price: 20000,
                discountPrice: 10000,
                isDiscount: true
            },
            
        ]
        const spy = sinonSandbox.stub(ClientApi.prototype, 'GetProduct').returns(Promise.resolve(products))
        const productList = shallow(
            <ProductList /> ,
         )
        await productList.instance().searchProduct("tvLG")
        sinon.assert.calledOnce(spy)
        expect(productList.find("#container-products").length).toBe(1)
        expect(productList.find(ProductCard).length).toBe(2)
       

      })



      test('should render ContainerError', async () => {
        const products = null   
        
        const spy = sinonSandbox.stub(ClientApi.prototype, 'GetProduct').returns(Promise.resolve(products))
        const productList = shallow(
            <ProductList /> ,
         )
        await productList.instance().searchProduct("NO EXIST")
        sinon.assert.calledOnce(spy)
        expect(productList.find(ContainerError).length).toBe(1)
       

      })


      


})