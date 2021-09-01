import React, { Component, Fragment } from 'react'
//import ClientAPI from '../../clients/ClientApi'
import SearchBar from '../SearchBar'

import ProductCard from '../ProductCard'

import { Container } from './styled';

import ClientAPI from '../../clients/ClientApi'
class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
           products:[],
           query:""
           
        }
     this.clientApi = new ClientAPI()
    }

    
    async componentDidMount() {
       /*  try {
            this.setState({ loading: true }, async () => {
                const menu = await this.clientApi.getMenuForToday()
                this.setState({ menu: menu, loading: false })
            })
        } catch (error) {
            console.log(error)
            alert(error)
        } */

    }

     getProducts = async () => {
        try {
          
          const products = await this.clientApi.GetProduct()
          console.log(products)
          this.setState({ products: products })
          
        } catch (error) {
          alert(error)
        }
      }  


    searchProduct =  async (query) => {
        this.setState({ query: query })
        await this.getProducts()
        
    }


    render() {
        const { products } = this.state
        return (
             
        <Fragment>
                <Container>  
                <div className="header compact">
                    <div className="header-W">
                        <div className="logo">
                            <a href="/catalogo/"><img alt="Lider Logo" src="/assets/images/logo.svg"/></a>
                        </div> 
                        <section>
                        <SearchBar handleText={this.searchProduct}></SearchBar> 
                        </section>
                    </div>
                </div>
               
                <div className="right-container"> {
                        products.map((product) =>  <ProductCard key={product.id} product={product}> </ProductCard> )
                    }</div> 

               
                </Container>
            </Fragment>
            




        )
    }
}

export default ProductList