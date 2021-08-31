import React, { Component } from 'react'
//import ClientAPI from '../../clients/ClientApi'
import SearchBar from '../SearchBar'

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
          
        } catch (error) {
          alert(error)
        }
      }  


    searchProduct =  async (query) => {
        this.setState({ query: query })
        await this.getProducts()
        
    }



  



    render() {
        
        return (

            
           <SearchBar handleText={this.searchProduct}></SearchBar>
        )
    }
}

export default ProductList