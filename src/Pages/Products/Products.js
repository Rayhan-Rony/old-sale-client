import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookNowModal from '../BookNowModal/BookNowModal';
import SingleProduct from './SingleProduct';

const Products = () => {
    const { id } = useParams()
    const [modalproduct, setModalProduct] = useState(null)
    // const id = parseInt(par.id)
    const url = `http://localhost:5000/category/${id}`
    const { data: products = [] } = useQuery({
        queryKey: ['products', id],
        queryFn: () => fetch(url)
            .then(res => res.json())

    })
    console.log(products)


    // const products = useLoaderData()
    // console.log(products)
    // console.log(par.id)
    // console.log(typeof (id))
    return (
        <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-40 w-11/12 mx-auto'>
            {
                products.map(product => <SingleProduct key={product._id} setModalProduct={setModalProduct} product={product}></SingleProduct>)
            }
            {
                modalproduct &&
                <BookNowModal modalproduct={modalproduct}></BookNowModal>
            }
        </div>
    );
};

export default Products;