import rek from "./rekk.png";
import img from "./orig.jpg";
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

const Home = () => {
  return (
    <main className="w-full">
      <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[700px]">
        <img src={rek} alt="" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center bg-black/50 px-5 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl text-white">
            <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Fayz Cafe</h1>

            <p className="mb-7 text-base leading-7 sm:text-xl sm:leading-8">
              Sizning sevimli taomlaringizni toping va buyurtma qiling! Mazali
              taomlar, sifatli xizmat va qulay sharoit!
            </p>

            <button className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-orange-600 sm:px-8">
              Buyurtma berish
            </button>
            </div>
          </div>
        </div>
      </div>
     
  
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl text-center mb-10">Bizning mahsulotlarimiz</h1>

        <h2 className="text-3xl mb-6">Setlar</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
          </article>

          <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
            <img src={image12} alt="" className="w-full h-60 object-cover" />
            <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
            <p className="px-4 text-gray-600">xxxxx</p>
            <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
          </article>

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
      </div>
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div className="relative h-64 overflow-hidden rounded-3xl shadow-xl">
          <img src={img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-end bg-black/40 p-6">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Fayz Cafe</h2>
              <p className="text-lg">Oilaviy dasturxon, halol va mazali taomlar</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md hover:shadow-xl cursor-pointer">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Telefon</h3>

          <p className="mb-2 text-gray-600">
            <a href="tel:+998997620707" className="font-medium text-gray-900 hover:text-orange-500">
              +998 99 762 07 07
            </a>
          </p>
          <p className="mb-2 text-gray-600">
            <a href="tel:+998999740707" className="font-medium text-gray-900 hover:text-orange-500">
              +998 99 974 07 07
            </a>
          </p>
          <p className="mb-2 text-gray-600">
            <a href="tel:+998996597777" className="font-medium text-gray-900 hover:text-orange-500">
              +998 99 659 77 77
            </a>
          </p>
          <p className="text-gray-600">
            <a href="tel:+998909600083" className="font-medium text-gray-900 hover:text-orange-500">
              +998 90 960 00 83
            </a>
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md hover:shadow-xl cursor-pointer">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Ish vaqti</h3>

          <p className="mb-2 text-gray-600">
            G'azalkent: <span className="font-medium text-gray-900">09:00 – 23:00</span>
          </p>
          <p className="text-gray-600">
            Chimyon va Amirsoy: <span className="font-medium text-gray-900">08:00 – 22:00</span>
          </p>
        </div>

        <div className="rounded-3xl bg-orange-50 p-6 shadow-md">
          <p className="leading-7 text-gray-700">
            Shanba va yakshanba kunlari tushdan keyin mehmonlar ko'p bo'ladi.
            Joyingizni oldindan band qilib qo'ying.
          </p>
        </div>
      </div>

      <div className="self-start rounded-3xl bg-white p-8 shadow-xl">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">Xabar qoldiring</h2>
        <p className="mb-6 text-gray-500">
          Stol band qilish yoki savollaringiz bo'lsa, yozing. Tez orada siz
          bilan bog'lanamiz.
        </p>

        <form  className="flex flex-col gap-5">
          <div>
            <label className="mb-2 block font-medium text-gray-700">Ismingiz</label>
            <input
              type="text"
              required
              placeholder="Ismingizni kiriting"
              className="w-full rounded-xl bg-orange-50 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Telefon raqamingiz
            </label>
            <input
              type="tel"
              required
              placeholder="+998 __ ___ __ __"
              className="w-full rounded-xl bg-orange-50 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">Filial</label>
            <select className="w-full cursor-pointer rounded-xl bg-orange-50 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400">
              <option>G'azalkent Oilaviy kafe</option>
              <option>Chimyon va Amirsoy (Tog' kafesi)</option>
              <option>Toshkent shahri</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Nima haqida yozmoqchisiz?
            </label>
            <select className="w-full cursor-pointer rounded-xl bg-orange-50 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400">
              <option>Stol band qilish</option>
              <option>Yetkazib berish</option>
              <option>To'y oshi yoki banket</option>
              <option>Kottej band qilish</option>
              <option>Fikr yoki taklif</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">Xabaringiz</label>
            <textarea
              rows="4"
              placeholder="Masalan: shanba kuni soat 18:00 ga 6 kishilik stol kerak..."
              className="w-full resize-none rounded-xl bg-orange-50 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-orange-500 py-3 text-lg font-semibold text-white shadow-lg hover:bg-orange-600"
          >
            Xabar yuborish
          </button>
        </form>
      </div>
    </section>
    </main>
  );
};

export default Home;