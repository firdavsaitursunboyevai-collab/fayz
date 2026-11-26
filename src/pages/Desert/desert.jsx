import { Link } from "react-router-dom";

const Desert = () => {
    return (
        <main className="mx-auto max-w-7xl px-6 py-8">
            <div className="mb-8 flex items-center gap-3 text-sm text-gray-400">
                <Link to="/" className="text-gray-600 transition hover:text-orange-500">
                    Bosh sahifa
                </Link>
                <span>/</span>
                <span className="text-gray-700">Desertlar</span>
            </div>

         

            <section aria-labelledby="dessert-list-title">
                <h2
                    id="dessert-list-title"
                    className="mb-6 text-2xl font-semibold text-gray-900 sm:text-3xl"
                >
                    Shirinliklarimiz
                </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                 <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
                            <img src="https://www.southernliving.com/thmb/l7INZHNOP2-MzwCCq6gt7z3y_fE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Peanut_Butter_Pretzel_Pie_012-09c44a5d8f164dbeb149035b5eae14fe.jpg" alt="" className="w-full h-60 object-cover" />
                            <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
                            <p className="px-4 text-gray-600">xxxxx</p>
                            <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
                          </article>
                
                          <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
                            <img src="https://images.food52.com/tNRfPSixIiRGkU9k1K9OcMq9Gd0=/3e23144f-1c76-42c5-80a8-244a56235334--food52_01-15-13-5233.jpg" alt="" className="w-full h-60 object-cover" />
                            <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
                            <p className="px-4 text-gray-600">xxxxx</p>
                            <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
                          </article>
                
                          <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-fqwTIO9j64aA5fqkiTwORGlj9Zn6iPOqC0D6u3XFQ&s=10" alt="" className="w-full h-60 object-cover" />
                            <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
                            <p className="px-4 text-gray-600">xxxxx</p>
                            <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
                          </article>
                
                          <article className="bg-white rounded-3xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden">
                            <img src="https://www.midwestliving.com/thmb/lML3-aFbmWNHGXRqLMfnTUt7Pbg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KH_020624_MDWL0264FINAL-copy2_preview-48597259de2941d8bbef7abadb8ed041.jpg" alt="" className="w-full h-60 object-cover" />
                            <h3 className="mt-3 px-4 text-2xl">xxxxx</h3>
                            <p className="px-4 text-gray-600">xxxxx</p>
                            <p className="px-4 pb-4 text-sm text-gray-400">xxxxx</p>
                          </article>
            </div>
            </section>

            <div className="mt-10 text-center">
                <Link
                    to="/menu"
                    className="inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    Asosiy menyuga qaytish
                </Link>
            </div>
        </main>
    );
};

export default Desert;