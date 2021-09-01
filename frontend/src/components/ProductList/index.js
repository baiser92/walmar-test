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
     
    }

     getProducts = async (query) => {
        try {
          
          const products = await this.clientApi.GetProduct(query)
          console.log(products)
          this.setState({ products: products })
          
        } catch (error) {
          alert(error)
        }
      }  


    searchProduct =  async (texto) => { 
        await this.getProducts(texto)
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
                
                    <div className="right-container"> 
                    
                    {products ?  products.map((product) =>  <ProductCard key={product.id} product={product}> </ProductCard> )


                    : <div> NO EXISTEN PRODUCTOS</div>}
                
                    </div> 
                </Container>
            </Fragment>
        )
    }
}

export default ProductList