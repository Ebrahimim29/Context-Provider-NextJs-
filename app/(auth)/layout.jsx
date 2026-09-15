import { Children } from "react";

const AuthLayout = ({ children }) => {
    return (
        <html lang="en" className="h-full">
            <body dir="rtl" className="h-full">
                <div className="grid grid-cols lg:grid-cols-3 h-full bg-linear-to-r from-indigo-600 from-10% via-sky-700 via-30% to-emerald-600 to-90%">
                    <div className="lg:col-start-2 h-full w-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
};

export default AuthLayout;