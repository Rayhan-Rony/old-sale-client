import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    // console.log(user?.displayName)


    const { data: myproducts = [] } = useQuery({
        queryKey: ['users', user],
        queryFn: () => fetch(`http://localhost:5000/myProducts?email=${user?.email}`)
            .then(res => res.json())
    })
    console.log(myproducts)


    const handleAdvertise = (product) => {
        console.log(product)
        const advertiseStatus = 'true'
        const advertiseProduct = { advertiseStatus, ...product }
        console.log(advertiseProduct)

        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
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
                                myProduct.soldStatus === 'avialable' ? <td><button onClick={() => handleAdvertise(myProduct)} className='btn btn-outline btn-xs'>Advertise</button></td> : <td><button className='btn btn-outline btn-xs ' disabled>Advertised</button></td>
                            }
                            <td><button className='btn btn-outline btn-xs'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;