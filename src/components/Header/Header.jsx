
import { Link } from "react-router-dom";
import image from './fayz.png'
const Header = () => {
  return (
    <header className= "  px-8 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <img
            src={image}
            alt=""
            className="px-2 w-30"
          />
        </Link>

      <nav aria-label="Asosiy navigatsiya" className="flex flex-wrap items-center gap-5">
        <Link
  to="/"
  className="text-gray-800 hover:text-[#6D28D9]"
>
  Bosh sahifa
</Link>
  <Link to="/about" className="text-gray-800 hover:text-[#6D28D9]">
    Biz haqimizda
  </Link>

<Link
  to="/menu"
  className="text-gray-800 hover:text-[#6D28D9]"
>
  Menyu
</Link>


</nav>
       
      </div>
    </header>
  );
};

export default Header;
