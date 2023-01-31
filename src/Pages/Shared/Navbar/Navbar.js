import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)



    return (
        <div className="navbar sticky top-0 z-50 bg-gray-200 rounded-sm">
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

                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;