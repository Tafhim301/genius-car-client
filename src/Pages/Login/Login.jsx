import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import loginImg from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        
        const password = form.password.value;
       
        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="lg:text-left ">
                    <img className="w-full" src={loginImg} alt="" />

                </div>
                <div className="card  w-full border  border-gray-200 bg-base-100">
                    <div className="py-4">
                        <h1 className="text-5xl  text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" name="email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" name="email" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error text-white">Login</button>

                            </div>
                        </form>
                        <div className="text-center">
                            <p className="font-semibold mb-3">Or Sign In With</p>
                            <button className="mr-3 rounded-full btn"><FaGoogle className="text-xl"></FaGoogle></button>
                            <button className="btn rounded-full mr-3"><FaFacebook className=" text-2xl text-blue-600"></FaFacebook></button>
                            <button className="btn rounded-full"><FaLinkedin className="text-2xl  text-blue-800"></FaLinkedin></button>
                            <p className="text-center font-semibold mt-4">New To Car Doctors?<Link className="text-red-500" to={'/signup'}>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;