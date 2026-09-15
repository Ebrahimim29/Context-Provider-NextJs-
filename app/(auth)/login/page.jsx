import ToggleBtn from "@/components/particial/ToggleBtn"

const Login = () => {
    return (
        <div className="flex justify-center items-center h-full w-full px-2 lg:px-10">
            <form className="w-full text-via-600 bg-gradient from-gray-500 to-gray-100 p-3 rounded-lg border-2 shadow">
                <h1 className="text-center my-5 text-4xl">Login</h1>
                <div>
                    <label>Phone Number:</label>
                    <input type="number" name="phone" className="px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300"/>
                </div>
                <div className="mt-5">
                    <label>PassWord:</label>
                    <input type="password" name="password" className="px-4 w-full border-gray-600 border-2 rounded-full h-12 focus:outline-blue-300" />
                </div>
                <div className="mt-5">
                    <ToggleBtn name="remember" title="Remember Me"/>   
                </div>

                <div className="my-6 px-4">
                    <button className="rounded-full w-full bg-blue-600 h-12 text-white">Enter</button>
                </div>

            </form>

        </div>
    )
};

export default Login;