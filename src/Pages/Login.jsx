import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; 
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; 

const Login = () => {
  useEffect(() => {
    document.title = "Login | GameHub";
  }, []);

  const { loginUser, setUser, signInGoogle, forgatePass } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          toast('Please verify your email first!');
          return;
        }
        setUser(res.user);
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(location.state ? location.state : '/');
      })
      .catch((err) => setError(err.message));
  };

  const handleForgate = () => {
    const email = emailRef.current.value; 
    if (!email) {
      toast('Please enter your email first!');
      return;
    }
    forgatePass(email)
      .then(() => toast('Password reset link sent to your email.'))
      .catch((err) => setError(err.message));
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } })
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <motion.div 
        className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-sm shadow-blue-500"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Login to GameHub</h1>

        <motion.form onSubmit={handleLogin} className="space-y-4">
          <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef} 
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </motion.div>

          <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible" className="relative">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 pr-10 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
            <p onClick={handleForgate} className="hover:underline cursor-pointer">Forgate Password?</p>
          </motion.div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <motion.button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Login
          </motion.button>
        </motion.form>

        <motion.div className="mt-6 text-center" 
                    variants={fieldVariants} initial="hidden" animate="visible" custom={2}>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-white text-black border border-gray-300 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path fill="#fff" d="M0 0h512v512H0z"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>
        </motion.div>

        <motion.p className="text-center text-gray-400 mt-6"
                  variants={fieldVariants} initial="hidden" animate="visible" custom={3}>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-500 font-semibold"
          >
            Register here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
