import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allsellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: () => fetch('https://server-murex-nine.vercel.app/sellers')
            .then(res => res.json())

    })

    const handleDelete = (id) => {

        fetch(`https://server-murex-nine.vercel.app/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch()
                }


            })

    }


    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Verify</th>


                    </tr>
                </thead>
                <tbody>



                    {
                        sellers.map(seller => <tr key={seller._id} className="hover">

                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button onClick={() => handleDelete(seller._id)} className='btn btn-outline btn-xs'>Delete</button></td>
                            <td><button className='btn btn-outline btn-xs'>Verify</button></td>


                        </tr>)
                    }

                </tbody>
            </table >
        </div >
    );
};

export default Allsellers;