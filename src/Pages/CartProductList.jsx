import React,{useContext} from 'react'
import {CartContext} from '../contex/GeneralCart'
import * as actions from '../contex/actions'
import Header from '../components/commons/Header'
import {Grid, Button} from '@mui/material'
import { Link } from 'react-router-dom'

export default function CartProductList() {
    const {allProductsInCart, dispacher} = useContext(CartContext)
  return (
      <>
      <Header/>
      <Grid container spacing={2}>
             <Grid item md={2}><h3>Product Name</h3></Grid>
              <Grid item md={2}><h3>Quantity</h3></Grid>
              <Grid item md={2}> <h3>Price</h3></Grid>
              <Grid item md={3}><h3>Image</h3></Grid>
              <Grid item md={3}></Grid>
      {
          allProductsInCart.map((product)=>(
              <>
              <Grid item md={2}>{product.name}</Grid>
              <Grid item md={2}>{product.qqt}</Grid>
              <Grid item md={2}> {product.price}</Grid>
              <Grid item md={3}><img src={product.img} width="100"/></Grid>
              <Grid item md={3}><Button onClick={()=> dispacher({type:actions.REMOVEPRODUCT,payload:product.id})}>X</Button></Grid>
              </>
  ))
      }
            <Grid item md={2}><h3>Number Of Products</h3></Grid>
              <Grid item md={2}><h3>-------</h3></Grid>
              <Grid item md={2}> <h3>Total Cost</h3></Grid>
              <Grid item md={3}><h3>------</h3></Grid>
              <Grid item md={3}><Link to="/make-the-oder"><Button>Make and Order</Button></Link></Grid>
      </Grid>
      </>
  )
}
