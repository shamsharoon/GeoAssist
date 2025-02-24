'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('popular');

    const destinations = [
        {
            id: 1,
            name: 'Banff, Canada',
            image: 'https://images.unsplash.com/photo-1609825488888-3a766db05542?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFuY291dmVyfGVufDB8fDB8fHww',
            price: '1,199',
            rating: 4.9,
        },
        {
            id: 2,
            name: 'Vancouver, Canada',
            image: 'https://images.unsplash.com/photo-1609825488888-3a766db05542?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFuY291dmVyfGVufDB8fDB8fHww',
            price: '999',
            rating: 4.8,
        },
        {
            id: 3,
            name: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9yb250b3xlbnwwfHwwfHx8MA%3D%3D',
            price: '1,299',
            rating: 4.7,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50" data-oid="bvferjy">
            <main className="max-w-7xl mx-auto px-4 py-12" data-oid="sn9bh-2">
                <nav className="" data-oid="5vbc5u6">
                    <div className="max-w-7xl mx-auto px-4 py-6" data-oid="4:nymwo" key="olk-s0zl">
                        <div className="flex justify-between items-center" data-oid="k4vhb3b">
                            <div
                                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                                data-oid="abyblbf"
                            >
                                GeoAssist
                            </div>
                            <div className="space-x-8" data-oid="2i960:u">
                                <button
                                    className="hover:text-blue-600 transition-colors"
                                    data-oid="lguo:fv"
                                >
                                    Destinations
                                </button>
                                <button
                                    className="hover:text-blue-600 transition-colors"
                                    data-oid="zsm42h4"
                                >
                                    About
                                </button>
                                <button
                                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                    data-oid="tr9od0_"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="text-center mb-16" data-oid="_ojyh85">
                    <h1 className="text-5xl font-bold mb-4" data-oid="16pvu0u">
                        Discover Your Next Adventure
                    </h1>
                    <p className="text-gray-600 text-xl" data-oid="xx7nrxx">
                        Explore handpicked destinations around the world
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-12" data-oid="1n6ws-t">
                    <div className="relative" data-oid="dq4czv4">
                        <input
                            type="text"
                            placeholder="Search for destinations or activities..."
                            className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-600 pl-12 pr-4 text-lg"
                            data-oid="q6xfni."
                        />

                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="u9:7yrv"
                        >
                            <path
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                data-oid="ufhnezd"
                            />
                        </svg>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                            data-oid=":t6etyl"
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="mb-12" data-oid="zju9:w4">
                    <div className="flex justify-center space-x-4 mb-8" data-oid="1k1yap8">
                        {['popular', 'trending', 'new'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full capitalize ${
                                    activeTab === tab
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                                data-oid="qxx5yr5"
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="87o9xsi"
                    >
                        {destinations.map((destination) => (
                            <div
                                key={destination.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                                data-oid="fz1:t77"
                            >
                                <div className="relative h-64" data-oid="2z986ij">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-full object-cover"
                                        data-oid="kincsr_"
                                    />

                                    <div
                                        className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="-kgcc86"
                                    >
                                        ★ {destination.rating}
                                    </div>
                                </div>
                                <div className="p-6" data-oid="i:pl0hk">
                                    <h3 className="text-xl font-semibold mb-2" data-oid="6i.cbsk">
                                        {destination.name}
                                    </h3>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="q8m0bwg"
                                    >
                                        <span
                                            className="text-blue-600 font-bold"
                                            data-oid="xpegjo1"
                                        >
                                            ${destination.price}
                                        </span>
                                        <button
                                            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                            data-oid="1o9221m"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg" data-oid="dt1y5s1">
                    <div className="text-center mb-8" data-oid="utj54e5">
                        <h2 className="text-3xl font-bold mb-4" data-oid="-:75a0m">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-gray-600" data-oid="bj7nddj">
                            Subscribe to our newsletter for exclusive travel deals
                        </p>
                    </div>
                    <div className="flex max-w-md mx-auto" data-oid="2ld_dhb">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-200 focus:outline-none focus:border-blue-600"
                            data-oid="ppnrd0c"
                        />

                        <button
                            className="px-6 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition-colors"
                            data-oid="e0gse67"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-900 text-white mt-16" data-oid="mk62wek">
                <div className="max-w-7xl mx-auto px-4 py-12" data-oid="dvun1hf">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="wa4i8wx">
                        <div data-oid="9bzje8j">
                            <h3 className="text-xl font-bold mb-4" data-oid="tnukrdl">
                                GeoAssist
                            </h3>
                            <p className="text-gray-400" data-oid="uu:9vub">
                                Your gateway to extraordinary adventures
                            </p>
                        </div>
                        <div data-oid="s_w8whk">
                            <h4 className="font-semibold mb-4" data-oid="u3jlc9u">
                                Destinations
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="cxo67f7">
                                <li data-oid="k9cc1sk">Popular</li>
                                <li data-oid="9q3ois:">Trending</li>
                                <li data-oid="r9lnk:i">New Arrivals</li>
                            </ul>
                        </div>
                        <div data-oid="c9_1voz">
                            <h4 className="font-semibold mb-4" data-oid="5fm_nd.">
                                Company
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="y-smgk7">
                                <li data-oid="4i8m184">About Us</li>
                                <li data-oid="l.6ipm6">Contact</li>
                                <li data-oid="nan:eyd">Careers</li>
                            </ul>
                        </div>
                        <div data-oid="298o5w2">
                            <h4 className="font-semibold mb-4" data-oid="95m18y9">
                                Follow Us
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="4k.a2h6">
                                <li data-oid=":psc5rt">Instagram</li>
                                <li data-oid="h2ifo9f">Twitter</li>
                                <li data-oid="rzm..mo">Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
