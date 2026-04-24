// src/pages/LandingPages/HomePage.jsx
import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            {/* Hero Section */}
            <section className="relative min-h-[32rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt="BulldogEx Campus Store Banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/70 to-zinc-900/40" />

                <div className="relative z-10 flex min-h-[24rem] items-center justify-end text-right sm:min-h-[26rem]">
                    <div className="max-w-xl">
                        <span className="inline-block mb-4 rounded-full border border-zinc-300/50 bg-zinc-900/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-200 backdrop-blur-sm">
                            Campus Marketplace
                        </span>
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-base leading-7 text-zinc-100 sm:text-lg">
                            Explore campus uniforms, student essentials, and school merch and accesories in one
                            quick storefront. Your one-stop shop for everything Bulldog!
                        </p>
                        <div className="mt-8 flex flex-wrap justify-end gap-3">
                            <Button to="/products" variant="primary">
                                Shop Now →
                            </Button>
                            <Button to="/about">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Images */}
            <section className="border-y-2 border-nu-blue bg-gradient-to-br from-blue-50 to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mb-8 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-nu-blue">Quick shopping blocks</h2>
                    <div className="mt-3 h-px w-12 bg-nu-gold mx-auto" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Products Stat Card */}
                    <div className="group rounded-3xl border-2 border-nu-blue bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-40 overflow-hidden">
                            <img 
                                src="/images/stats/products-image.jpg" 
                                alt="NU Products Display"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x400/003C71/white?text=NU+Products";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-nu-blue/80 to-transparent"></div>
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-nu-blue">08</p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold">
                                Products Available
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Browse our collection</p>
                        </div>
                    </div>

                    {/* Categories Stat Card */}
                    <div className="group rounded-3xl border-2 border-nu-blue bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-40 overflow-hidden">
                            <img 
                                src="/images/stats/categories-image.jpg" 
                                alt="NU Product Categories"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x400/003C71/white?text=NU+Categories";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-nu-blue/80 to-transparent"></div>
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-nu-blue">06</p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold">
                                Product Categories
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Shop by department</p>
                        </div>
                    </div>

                    {/* Orders Stat Card */}
                    <div className="group rounded-3xl border-2 border-nu-blue bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-40 overflow-hidden">
                            <img 
                                src="/images/stats/orders-image.jpg" 
                                alt="NU Orders Ready"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x400/003C71/white?text=NU+Orders";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-nu-blue/80 to-transparent"></div>
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-nu-blue">24</p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold">
                                Completed Orders
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Happy customers served</p>
                        </div>
                    </div>

                    {/* Pickup Slots Stat Card */}
                    <div className="group rounded-3xl border-2 border-nu-blue bg-white overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-40 overflow-hidden">
                            <img 
                                src="/images/stats/pickup-image.jpg" 
                                alt="NU Pickup Location"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x400/003C71/white?text=NU+Pickup";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-nu-blue/80 to-transparent"></div>
                        </div>
                        <div className="p-5 text-center">
                            <p className="text-4xl font-bold text-nu-blue">03</p>
                            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-nu-gold">
                                Daily Pickup Slots
                            </p>
                            <p className="mt-2 text-xs text-gray-500">9AM, 1PM, 4PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop Sections */}
            <section className="border-y-2 border-nu-blue bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mb-8 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-nu-gold">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-nu-blue">Simple store cards</h2>
                    <div className="mt-3 h-px w-12 bg-nu-gold mx-auto" />
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Daily Essentials",
                            description: "Bags, tumblers, lanyards, and items used every school day.",
                            image: "/images/products/tmblr.png",
                            buttonText: "View Products"
                        },
                        {
                            title: "Bulldogs Accesories",
                            description: "Notes, desk tools, and study kits for class and review weeks.",
                            image: "/images/products/Ring1.webp",
                            buttonText: "Shop Supplies"
                        },
                        {
                            title: "Campus Apparel",
                            description: "Comfortable pieces for class days, commute days, and weekends.",
                            image: "/images/products/blackT.png",
                            buttonText: "View Apparel"
                        }
                    ].map((section, idx) => (
                        <article key={idx} className="group rounded-3xl border-2 border-nu-blue bg-gradient-to-br from-blue-50 to-white overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/600x400/003C71/white?text=${section.title}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-nu-blue/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-nu-blue">{section.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {section.description}
                                </p>
                                <Button to="/products" className="mt-5 w-full" variant="primary">
                                    {section.buttonText} →
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;