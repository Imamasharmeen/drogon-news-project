import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, user, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
  
    const form = new FormData(e.target);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({name, photo, email, password});

    createUser(email, password)
      .then((result) => {
        const user =result.user;
        setUser(user)
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.message
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold" to="/auth">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
