import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    // const [disabled, setDisabled] = useState(false)

    // console.log(user?.displayName)


    const { data: myproducts = [] } = useQuery({
        queryKey: ['users', user],
        queryFn: () => fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
            .then(res => res.json())
    })
    // console.log(myproducts)


    const handleAdvertise = (product) => {
        console.log(product)
        const { category_id, img, location, originalPrice, resalePrice, sellerEmail, sellersName, soldStatus, time, usedTime, _id } = product
        const id = _id
        const advertiseStatus = 'true'
        const productForadd = { id, category_id, img, location, originalPrice, resalePrice, sellerEmail, sellersName, soldStatus, time, usedTime, advertiseStatus }
        // const advertiseProduct = { advertiseStatus, ...product }

        // console.log(advertiseProduct)

        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productForadd)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log('true')
                    // setDisabled(true)
                }
            })
    }
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/advertise/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    // console.log(disabled)
    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>



                    {
                        myproducts.map(myProduct => <tr key={myProduct._id} className="hover">

                            <td>{myProduct.name}</td>
                            <td>${myProduct.resalePrice}</td>
                            <td>{myProduct.soldStatus}</td>
                            {
                                myProduct.soldStatus === 'sold' ? <td><button className='btn btn-outline btn-xs ' disabled>Advertise</button></td> :

                                    <td><button onClick={() => handleAdvertise(myProduct)} className='btn btn-outline btn-xs'>Advertise</button></td>



                            }
                            <td><button onClick={() => handleDelete(myProduct._id)} className='btn btn-outline btn-xs'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table >
        </div >
    );
};

export default MyProducts;