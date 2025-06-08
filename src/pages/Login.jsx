import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "/src/firebase";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error.message);
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Left Column (Illustration) */}
      <div className="w-1/2 flex items-center justify-center p-12">
        {/* Placeholder for the illustration */}
        <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-lg">
          {/* You would replace this div with your illustration component or image */}
          <span className="text-gray-400 text-2xl">Illustration Here</span>
        </div>
      </div>

      {/* Right Column (Login Form) */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-2">Log in</h2>
          <p className="text-gray-400 mb-8">Log in to Quest.ess</p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
                Enter your username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="username@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                Enter your password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**************"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="text-sm text-gray-400" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot password?
              </a>
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="text-center text-gray-400 mb-6">
            or
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline" onClick={handleGoogleLogin}>G</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">f</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">t</button>
          </div>

          <div className="text-center">
            <span className="text-gray-400">Create an account. </span>
            <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
