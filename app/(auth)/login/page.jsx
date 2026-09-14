const Login = () => {
    return (
        <div className="flex justify-center items-center h-full w-full px-2 lg:px-10">
            <form className="w-full text-gray-600 bg-gradient from-gray-500 to-gray-100 p-3 rounded-lg border-2 shadow">
                <h1 className="text-center my-5">Login</h1>
                <div>
                    <label>Phone Number:</label>
                    <input type="number" name="phone" className="px-4 w-full border-gray-300 border-2 rounded-full h-12 focus:outline-blue-300"/>
                </div>

            </form>

        </div>
    )
}