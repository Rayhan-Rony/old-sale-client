

import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
    const { signIn, user, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState('')

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log(from)
    const navigate = useNavigate()


    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                toast.success('Log in Succesfulll')


            })
            .catch(err => setError(err.message))

    }
    const handleSignInWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')

                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }
        , [user, navigate, from])
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2 md:w-full mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">Login Now</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <div className='text-red-400'>
                                <p>{error}</p>
                            </div>
                            <label className="label">
                                <p >If you haven't any account please <Link className="label-text-alt link link-hover text-blue-400" to='/register'>Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Log in</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSignInWithGoogle} className="btn btn-primary">Log In With Google</button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;