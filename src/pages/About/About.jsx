import { Link } from "react-router-dom";
import chefImg from "./chef.png"; 

const About = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      <div className="mb-6 flex items-center gap-3 text-gray-400">
        <Link to="/" className="text-gray-600 hover:text-[#6D28D9]">
          Bosh sahifa
        </Link>
        <span>/</span>
        <span className="text-gray-700">Biz haqimizda</span>
      </div>

      <section className="mb-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div>
          <h1 className="mb-5 text-4xl font-bold">Biz haqimizda</h1>
          <p className="text-lg leading-8 text-gray-600">
            Fayz cafe — Toshkent shahri va Toshkent viloyatining
            Bo'stonliq tumanida faoliyat yurituvchi mashhur milliy va oilaviy
            taomlar tarmog'i. Tarmoq o'zining halol oshxonasi, shinam oilaviy
            muhiti hamda mahalliy aholi va sayyohlar uchun yaratilgan qulay
            sharoitlari bilan keng tanilgan.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={chefImg}
            alt="Fayz Mount bosh oshpazi"
            className="h-[320px] w-full "
          />
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-3xl font-semibold">Bizning filiallar</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-semibold">
              Fayz cafe Oilaviy Kafe
            </h3>
            <p className="mb-1 text-gray-500">G'azalkent, Do'maloq mahallasi</p>
            <p className="mb-4 text-gray-500">
              Ozodlik ko'chasi (asosiy trassa usti)
            </p>
            <p className="mb-4 text-lg  text-orange-500">
              Har kuni 09:00 – 23:00
            </p>
            <p className="mb-4  text-gray-600">
              Keng oilaviy zal, alohida kabinkalar, ochiq terrasa, bolalar o'yin
              maydonchasi va bepul avtoturargoh. Joyida ovqatlanish, olib ketish
              va G'azalkent bo'ylab yetkazib berish xizmati bor.
            </p>
           
           
              
                <p className="text-gray-900">
              Kafe:
              <a
                href="tel:+998999740707"
                className="cursor-pointer  hover:text-orange-500"
              >
               +998 99 762 07 07
              </a>
            </p>
            <p className="text-gray-900">
              Kottejlar:
              <a
                href="tel:+998996597777"
                className="cursor-pointer  hover:text-orange-500"
              >
               +998 99 762 07 07
              </a>
            </p>
               <p className="text-gray-900">
              Kottejlar:
              <a
                href="tel:+998996597777"
                className="cursor-pointer  hover:text-orange-500"
              >
               +998 99 762 07 07
              </a>
            </p>
          </article>

          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-semibold">
              Fayz Mount tog' kafesi
            </h3>
            <p className="mb-1 text-gray-500">Chimyon va Amirsoy hududi</p>
            <p className="mb-4 text-gray-500">Amirsoy ko'chasi</p>
            <p className="mb-4 text-lg  text-orange-500">
              Har kuni 08:00 – 22:00
            </p>
            <p className="mb-4  text-gray-600">
              Tom qismida manzarali terrasa, bepul Wi-Fi va bolalar maydonchasi.
              Dam oluvchilar tunab qolishi uchun Fayz Mount Shale oilaviy
              kottejlari ham bor. Bu filialda turk oshxonasi taomlari ham
              taqdim etiladi.
            </p>
            <p className="text-gray-900">
              Kafe:
              <a
                href="tel:+998999740707"
                className="cursor-pointer  hover:text-orange-500"
              >
                +998 99 974 07 07
              </a>
            </p>
            <p className="text-gray-900">
              Kottejlar:
              <a
                href="tel:+998996597777"
                className="cursor-pointer  hover:text-orange-500"
              >
                +998 99 659 77 77
              </a>
            </p>
          </article>

          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-2xl font-semibold">Toshkent shahri</h3>
            <p className="mb-4 text-gray-500">Shahar filiallari</p>
            <p className="mb-2  text-gray-600">
              <span className=" text-gray-900">
                Qo'yliq (Xonobod):
              </span>
              Katta halqa yo'li 29/1-uy, «Tolariq» metro bekati yaqini.
              Kundalik taomlardan tashqari maxsus to'y oshlari ham tayyorlanadi.
            </p>
            <p className="mb-2  text-gray-600">
              <span className=" text-gray-900">Shayxontohur:</span>
              Ibn Sino mavzesi, Beltepa ko'chasi (88-avtobus oxirgi bekati).
            </p>
            <p className="mb-2  text-gray-600">
              <span className=" text-gray-900">
                Ko'ksaroy ko'chasi:
              </span>
              «Fayz kafe chinor»
              <a
                href="tel:+998909600083"
                className="cursor-pointer  text-gray-900 hover:text-orange-500"
              >
                +998 90 960 00 83
              </a>
            </p>
            <p className=" text-gray-600">
              <span className=" text-gray-900">Boshqa:</span>
              Nurafshon ko'chasi va Yangihayot tumanlarida ham kafelarimiz bor.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-3xl font-semibold">Bizning menyu</h2>
        <p className="mb-6 max-w-4xl text-lg leading-8 text-gray-600">
          Menyuda o'zbek milliy taomlari, yevropa oshxonasi va fast-fud
          yo'nalishlari jamlangan.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-xl font-semibold">Milliy taomlar</h3>
            <p className=" text-gray-600">
              Osh, manti, tandir somsa, ko'za sho'rva, lag'mon, do'lma, norin,
              qozon kabob va xasip.
            </p>
          </article>
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-xl font-semibold">Shashlik va steyk</h3>
            <p className=" text-gray-600">
              Ko'mirda pishirilgan tovuq, qiyma, jaz, rulet va qo'ziqorinli
              kaboblar hamda steyklar.
            </p>
          </article>
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-xl font-semibold">Yevropa va fast-fud</h3>
            <p className=" text-gray-600">
              Burger, pitsa, lavash, xot-dog, fri kartoshkasi, salatlar va
              shirinliklar.
            </p>
          </article>
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-3 text-xl font-semibold">Ichimliklar</h3>
            <p className=" text-gray-600">
              Mevali va ko'k-qora choylarning keng tanlovi, tabiiy qahvalar va
              salqin ichimliklar.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-3xl font-semibold">Narx va qulayliklar</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-4 text-xl font-semibold">
              Bir kishi uchun o'rtacha hisob
            </h3>
            <p className="mb-2 text-gray-600">Shahar filiallari va G'azalkent</p>
            <p className="mb-5 text-2xl font-semibold">50 000 – 100 000 so'm</p>
            <p className="mb-2 text-gray-600">
              Chimyon va Amirsoy tog' filiali
            </p>
            <p className="text-2xl font-semibold">100 000 – 150 000 so'm</p>
          </article>
          <article className="cursor-pointer rounded-3xl bg-white p-6 shadow-md hover:shadow-xl">
            <h3 className="mb-4 text-xl font-semibold">Siz uchun qulayliklar</h3>
            <p className="mb-3 text-gray-600">
              Naqd pul va bank kartalari orqali to'lov qilish mumkin.
            </p>
            <p className="mb-3 text-gray-600">
              Bolalar uchun maxsus o'rindiqlar mavjud.
            </p>
            <p className="text-gray-600">
              Stolni oldindan band qilish imkoniyati bor.
            </p>
          </article>
        </div>
      </section>

      <section className="mb-10 rounded-3xl bg-orange-50 p-8 shadow-md">
        <h2 className="mb-3 text-2xl font-semibold">Eslatma</h2>
        <p className="mb-6 max-w-3xl text-lg leading-8 text-gray-600">
          Mehmonlar taomlarning mazasini, yangi yopilgan issiq nonlarni va
          oilaviy hordiq uchun qulay muhitni yuqori baholashadi. Dam olish
          kunlari, ayniqsa shanba va yakshanba tushdan keyin mehmonlar oqimi
          ko'p bo'ladi, shuning uchun joylarni oldindan band qilib qo'yishni
          tavsiya qilamiz.
        </p>
      </section>
    </main>
  );
};

export default About;
