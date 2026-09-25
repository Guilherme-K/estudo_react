import { Link, Outlet } from 'react-router-dom';

function MainLayout() {

  return (
    <div className="max-w-4xl mx-auto p-4 max-auto md:p-6"> 
        <nav className="flex flex-wrap gap-x-4 gap-y-2 md:mb-6 mb-4">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/recipe">Receita</Link>
        </nav>

        {/* Rendererizar automaticamente em Outlet (substitui) */}
        <Outlet />
    </div>
  );
}
export default MainLayout;