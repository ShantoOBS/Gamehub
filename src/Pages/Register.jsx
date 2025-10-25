import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; 

const Register = () => {
  useEffect(() => {
    document.title = "Register | GameHub";
  }, []);

  const { createUser, setUser, updatePro, emailVerify,setLoading } = useContext(AuthContext);
  const [error, setLocalError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setLocalError(
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updatePro({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            setLoading(false);
            toast.success("Account Created Successfully.");
            emailVerify(user)
              .then(() => {
                setLoading(false);
                toast("Verification email sent! Please check your inbox.");
                navigate("/");
              })
              .catch((error) => setLocalError(error.message));
          })
          .catch((error) => {
            setLocalError(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        setLocalError(error.message);
      });
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
        <h1 className="text-3xl font-bold text-center mb-6">Register for GameHub</h1>

        <motion.form onSubmit={handleRegister} className="space-y-4">
          <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </motion.div>

          <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-gray-300 mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </motion.div>

          <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-500"
            />
          </motion.div>

          <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible" className="relative">
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
          </motion.div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Register
          </motion.button>
        </motion.form>

        <motion.p className="text-center text-gray-400 mt-6"
                  variants={fieldVariants} initial="hidden" animate="visible" custom={4}>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-500 font-semibold"
          >
            Login here
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
