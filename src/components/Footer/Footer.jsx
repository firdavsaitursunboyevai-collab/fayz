import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Fayz Cafe</h2>
          <p className="max-w-sm leading-7">
            Mazali milliy taomlar, oilaviy atmosfera va qulay sharoitlar.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-lg text-white">Sahifalar</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="hover:text-orange-400">
              Bosh sahifa
            </Link>
            <Link to="/menu" className="hover:text-orange-400">
              Menyu
            </Link>
            <Link to="/about" className="hover:text-orange-400">
              Biz haqimizda
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Bog'lanish</h2>
          <p className="mb-2">G'azalkent, Toshkent viloyati</p>
          <a
            href="tel:+998997620707"
            className="font-medium text-white hover:text-orange-400"
          >
            +998 99 762 07 07
          </a>
          <p className="mt-3 text-sm">Har kuni: 09:00 - 23:00</p>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;