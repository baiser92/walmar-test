import React from 'react'
import sinon from 'sinon'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'regenerator-runtime/runtime'
import ProductCard from '../../../components/ProductCard'


configure({adapter: new Adapter()})


describe('ProductCard component test', () => {

    test('show render productCard', async () => { 
        const product = 
            {
                id: 1,
                idProduct: 1,
                brand: "tvLG",
                description: "smart TV",
                image: "image",
                price: 20000,
                discountPrice: 0,
                IsDiscount: false
            }
        
        const productCard = shallow(
           <ProductCard key={product.id} product={product}> </ProductCard> ,
        )
        expect(productCard.instance().props.product).toEqual(product)
       
        
    })


    test('show to discount porcentaje and discount price in productCard for  palindrome true', async () => { 
        const product = 
            {
                id: 1,
                idProduct: 1,
                brand: "tvLG",
                description: "smart TV",
                image: "image",
                price: 20000,
                discountPrice: 10000,
                IsDiscount: true
            }
        
        const productCard = shallow(
           <ProductCard key={product.id} product={product}> </ProductCard> ,
        )
        expect(productCard.find("#discount-porcentaje").length).toBe(1)
        expect(productCard.find("#discount-price").length).toBe(1)  
        
    })


    test('show  validation isDiscout false  for  Palindrome false', async () => { 
        const product = 
            {
                id: 1,
                idProduct: 1,
                brand: "tvLG",
                description: "smart TV",
                image: "image",
                price: 20000,
                discountPrice: 0,
                IsDiscount: false
            }
        
        const productCard = shallow(
           <ProductCard key={product.id} product={product}> </ProductCard> ,
        )
        expect(productCard.find("#discount-porcentaje").length).toBe(0)
        expect(productCard.find("#discount-price").length).toBe(0)  
        
    })

})