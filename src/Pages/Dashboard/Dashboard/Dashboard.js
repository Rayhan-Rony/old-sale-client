import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { data: users = [] } = useQuery({
        queryKey: ['users', user],
        queryFn: () => fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
    })
    return (
        <div className='min-h-screen flex items-center justify-center'>
            {
                users[0]?.role === 'seller' &&
                <>
                    <li className='btn btn-outline mr-10'><Link to='/addproduct'>Add A Product</Link></li>
                    <li className='btn btn-outline'> <Link to='/myproducts'>My Products</Link></li>

                </>

            }
            {
                users[0]?.role === 'user' &&
                <li className='btn btn-outline'><Link to='/myorders'>My Orders</Link></li>

            }
        </div>
    );
};

export default Dashboard;