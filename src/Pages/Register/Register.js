import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

// import toast from 'react-hot-toast';
// import { useLocation, useNavigate } from 'react-router-dom';

// import UseTitle from '../../layout/hooks/UseTitle';

const Register = () => {
    const { createUser, loading, updateUserProfile } = useContext(AuthContext)
    // const location = useLocation()
    // const from = location.state?.from?.pathname || '/'
    // const navigate = useNavigate()
    const [error, setError] = useState('')
    // UseTitle('Register')
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                handleUpdateUserProfile(name)
                // form.reset()
                // toast.success('Sign Up Completed')
                // navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))

    }
    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,

        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => setError(err.message))
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="hero-content flex-col lg:flex-row-reverse  lg:w-1/2 md:w-full mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">Register Now</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required /> */}
                            <label className="label">
                                <span className="label-text">Select Your Role</span>
                            </label>
                            <select className="select w-full input-bordered required  ">
                                {/* <option disabled selected>Pick your favorite Simpson</option> */}
                                <option value='user'>User</option>
                                <option value='seller'>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <div className='text-red-400'>
                            <p>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Register;