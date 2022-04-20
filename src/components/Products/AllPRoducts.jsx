import {useContext} from 'react'
import Product from './Product'
import {FirestoreContext} from '../../contex/GeneralFireStore'
import { Grid} from '@mui/material'
function AllProducts(){
    const {allProducts} = useContext(FirestoreContext)
    return(
        <>
        <h1>this are my products</h1>
        <Grid container spacing={2}>
        {
            allProducts.map((product)=>(
                <Grid item sx={6} md={4} key={product.id}>
                <Product id={product.id} data={product.data}/>
                </Grid>
            ))
        }
        </Grid>
        </>

    )
}

export default AllProducts