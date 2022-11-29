import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch('http://localhost:5000/user')
            .then(res => res.json())

    })
    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>



                    </tr>
                </thead>
                <tbody>



                    {
                        users.map(seller => <tr key={seller._id} className="hover">

                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button className='btn btn-outline btn-xs'>Delete</button></td>


                            {/* {
                                myProduct.soldStatus === 'sold' ? <td><button className='btn btn-outline btn-xs ' disabled>Advertise</button></td> :

                                    <td><button onClick={() => handleAdvertise(myProduct)} className='btn btn-outline btn-xs'>Advertise</button></td>



                            } */}
                            {/* <td><button onClick={() => handleDelete(myProduct._id)} className='btn btn-outline btn-xs'>Delete</button></td> */}
                        </tr>)
                    }

                </tbody>
            </table >
        </div >
    );
};

export default AllBuyers;