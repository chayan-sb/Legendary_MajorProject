import { UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex size-20 justify-between p-4 shadow-md w-full">
      {/* Logo on the top left */}
      <Link to="/">
        <img src="/logo.png" alt="Logo" width={100} height={100} className="cursor-pointer bg-black" />
      </Link>
      
      {/* Center space */}
      <div className="flex-1"></div>
      
      {/* Links aligned to the right */}
      <div className="flex space-x-6 ">
        <Link to="/exercises" className="hover:underline ">
          Exercises
        </Link>
        <Link to="/blogs" className="hover:underline">
          Blogs
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <UserButton/>
      </div>
    </div>
  );
}

export default Navbar;

