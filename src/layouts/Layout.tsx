import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <Outlet />
            </div>
        </main>
    );
};

export default Layout;
