import { Link } from "react-router-dom";
import image from "./dd.jpg";
import image2 from "./lll.jpg";
import image3 from "./uk.jpg";
import image4 from "./osh.jpg";
import image5 from "./somsa.jpg";
import image6 from "./lagmon.jpg";
import image7 from "./pasta.jpg";
import image8 from "./pizza.jpg";
import image9 from "./kfc.jpg";
import image10 from "./nonon.jpg";
import image11 from "./joxori.jpg";
import image12 from "./aliviya.jpg";
import image13 from "./bery.jpg";
import image14 from "./cola.jpg";
import image15 from "./orange.jpg";
import image16 from "./apelsinn.jpg";

const Menyuu = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <div className="mb-6 flex items-center gap-3 text-gray-400">
        <Link to="/" className="text-gray-600 hover:text-[#6D28D9]">
          Bosh sahifa
        </Link>
        <span>/</span>
        <span className="text-gray-700">Menyu</span>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <aside className="w-full shrink-0 self-start lg:sticky lg:top-6 lg:w-64">
          <h1 className="mb-5 text-4xl">Menyu</h1>

          <div className="flex gap-2 overflow-x-auto rounded-2xl bg-white p-3 shadow-md lg:flex-col lg:overflow-visible lg:p-4">
            <a href="#setlar" className="shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-base font-light text-[#4a4a4a] transition-colors hover:bg-purple-100 lg:w-full lg:px-5 lg:text-lg">
              Setlar
            </a>
            <a href="#milliy" className="shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-base font-light text-[#4a4a4a] transition-colors hover:bg-purple-100 lg:w-full lg:px-5 lg:text-lg">
              Milliy taomlar
            </a>
            <a href="#yevropa" className="shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-base font-light text-[#4a4a4a] transition-colors hover:bg-purple-100 lg:w-full lg:px-5 lg:text-lg">
              Yevropa taomlari
            </a>
            <a href="#kofe" className="shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-base font-light text-[#4a4a4a] transition-colors hover:bg-purple-100 lg:w-full lg:px-5 lg:text-lg">
              Salatlar
            </a>
            <a href="#ichimliklar" className="shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-base font-light text-[#4a4a4a] transition-colors hover:bg-purple-100 lg:w-full lg:px-5 lg:text-lg">
              Ichimliklar
            </a>
          </div>
        </aside>

        <div className="flex-1">

        <section id="setlar" className="mb-14 scroll-mt-6">
          <h2 className="mb-5 text-4xl">Setlar</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image2} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image3} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

          </div>
        </section>

        <section id="milliy" className="mb-14 scroll-mt-6">
          <h2 className="mb-5 text-4xl">Milliy taomlar</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image4} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image5} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image6} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>


           

          </div>
        </section>

        <section id="yevropa" className="mb-14 scroll-mt-6">
          <h2 className="mb-5 text-4xl">Yevropa taomlari</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image7} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image8} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image9} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>


          </div>
        </section>

        <section id="kofe" className="mb-14 scroll-mt-6">
          <h2 className="mb-5 text-4xl">salatlar</h2>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image10} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image11} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">398.5 g</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image12} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

           

          </div>
        </section>

        <section id="ichimliklar" className="mb-14 scroll-mt-6">
          <h2 className="mb-5 text-4xl">Ichimliklar</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image13} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image14} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image15} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

            <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
              <img src={image16} alt="" className="w-full h-60 object-cover" />
              <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
              <p className="px-4 text-gray-600">xxxxx</p>
              <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
            </article>

          </div>
        </section>
        </div>
      </div>
    </main>
  );
};

export default Menyuu;