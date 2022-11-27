import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    console.log(user?.email)

    // const { data: products = [] } = useQuery({
    //     queryKey: ['products', id],
    //     queryFn: () => fetch(url)
    //         .then(res => res.json())

    // })
    // console.log(users[0].role)
    return (
        <div className="navbar bg-gray-200 rounded-sm">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl font-extrabold">OLD SALE</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">


                    {
                        user?.uid ?
                            <>



                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><Link onClick={logOut}>log Out</Link></li>
                            </>
                            : <li><Link to='/login'>Log In</Link></li>
                    }

                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;