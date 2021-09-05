import React, { Component, Fragment } from 'react'

import SearchBar from '../SearchBar'

import ProductCard from '../ProductCard'

import { Container, ContainerError } from './styled';

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

  getProducts = async (query) => {
    try {
      const products = await this.clientApi.GetProduct(query)
      this.setState({ products: products })
    } catch (error) {
      alert(error)
    }
  }  


  searchProduct =  async (texto) => { 
    this.setState({ query: texto })
    await this.getProducts(texto)
  }


  render() {
    const { products, query } = this.state
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
        
          {
            products ? 
            
            <div  id="container-products" className="right-container"> 
              
                { products.map((product) =>  <ProductCard key={product.id} product={product}> </ProductCard> ) }
            </div> 
            
            :  
            <ContainerError>
                <span> No existen resultados con la busqueda: <strong> " {query} "</strong>  </span> 
            </ContainerError>
          }
            
        </Container>
      </Fragment>
    )
  }
}

export default ProductList