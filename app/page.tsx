'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('popular');

    const destinations = [
        {
            id: 1,
            name: 'Banff, Canada',
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
            price: '1,299',
            rating: 4.8,
        },
        {
            id: 2,
            name: 'Vancouver, Canada',
            image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80',
            price: '899',
            rating: 4.7,
        },
        {
            id: 3,
            name: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80',
            price: '1,599',
            rating: 4.9,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50" data-oid="qplnnma">
            <nav className="bg-white shadow-lg" data-oid="fjeovbp">
                <div className="max-w-7xl mx-auto px-4 py-6" data-oid="bcvl6_f">
                    <div className="flex justify-between items-center" data-oid="e25hbli">
                        <div
                            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                            data-oid="16kl72x"
                        >
                            GeoAssist
                        </div>
                        <div className="space-x-8" data-oid="71vw6nt">
                            <button
                                className="hover:text-blue-600 transition-colors"
                                data-oid="xgl5uun"
                            >
                                Destinations
                            </button>
                            <button
                                className="hover:text-blue-600 transition-colors"
                                data-oid="o3w9x:2"
                            >
                                About
                            </button>
                            <button
                                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                data-oid="radeol:"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 py-12" data-oid="hvbhi4t">
                <div className="text-center mb-16" data-oid="j6505f8">
                    <h1 className="text-5xl font-bold mb-4" data-oid="vibxv6m">
                        Discover Your Next Adventure
                    </h1>
                    <p className="text-gray-600 text-xl" data-oid="jfu0kpr">
                        Explore handpicked destinations around the world
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-12" data-oid="wf593om">
                    <div className="relative" data-oid="19.8h3h">
                        <input
                            type="text"
                            placeholder="Search for destinations or activities..."
                            className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-600 pl-12 pr-4 text-lg"
                            data-oid="ckh_u0t"
                        />

                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="s6z4..3"
                        >
                            <path
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                data-oid="et6cx9v"
                            />
                        </svg>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                            data-oid="2f48wir"
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="mb-12" data-oid="2-g0jbf">
                    <div className="flex justify-center space-x-4 mb-8" data-oid="ra.2t_p">
                        {['popular', 'trending', 'new'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full capitalize ${
                                    activeTab === tab
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                                data-oid="5z6tnxa"
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="in0ik.x"
                    >
                        {destinations.map((destination) => (
                            <div
                                key={destination.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                                data-oid="5n6mvsr"
                            >
                                <div className="relative h-64" data-oid="_q74aeh">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-full object-cover"
                                        data-oid="8spzl87"
                                    />

                                    <div
                                        className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold"
                                        data-oid="q-:.hh7"
                                    >
                                        ★ {destination.rating}
                                    </div>
                                </div>
                                <div className="p-6" data-oid="xpcq.mh">
                                    <h3 className="text-xl font-semibold mb-2" data-oid="i5-dpsg">
                                        {destination.name}
                                    </h3>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="7t2-a7i"
                                    >
                                        <span
                                            className="text-blue-600 font-bold"
                                            data-oid="gxoi:2m"
                                        >
                                            ${destination.price}
                                        </span>
                                        <button
                                            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                            data-oid=":54.k9v"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg" data-oid="qo5gdwg">
                    <div className="text-center mb-8" data-oid="6p7q::.">
                        <h2 className="text-3xl font-bold mb-4" data-oid=".89g_wm">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-gray-600" data-oid="iov0y2z">
                            Subscribe to our newsletter for exclusive travel deals
                        </p>
                    </div>
                    <div className="flex max-w-md mx-auto" data-oid="pw2susg">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-200 focus:outline-none focus:border-blue-600"
                            data-oid="oaqi.z7"
                        />

                        <button
                            className="px-6 py-2 bg-blue-600 text-white rounded-r-full hover:bg-blue-700 transition-colors"
                            data-oid="iabmcey"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-900 text-white mt-16" data-oid="l49-t17">
                <div className="max-w-7xl mx-auto px-4 py-12" data-oid="ydxumgy">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid=".5x.vgk">
                        <div data-oid="k5wf6y.">
                            <h3 className="text-xl font-bold mb-4" data-oid="b5z0lnv">
                                GeoAssist
                            </h3>
                            <p className="text-gray-400" data-oid="lni2ww2">
                                Your gateway to extraordinary adventures
                            </p>
                        </div>
                        <div data-oid="6hy:q2j">
                            <h4 className="font-semibold mb-4" data-oid="_j4884_">
                                Destinations
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid=".ykbe85">
                                <li data-oid="hzegm4b">Popular</li>
                                <li data-oid="_w_tki3">Trending</li>
                                <li data-oid="6r97c8c">New Arrivals</li>
                            </ul>
                        </div>
                        <div data-oid="39l99wa">
                            <h4 className="font-semibold mb-4" data-oid="anfe_.q">
                                Company
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="ekxym:i">
                                <li data-oid="jcb3vnn">About Us</li>
                                <li data-oid="j4:gvz0">Contact</li>
                                <li data-oid="vk14dg5">Careers</li>
                            </ul>
                        </div>
                        <div data-oid="yd_jb0n">
                            <h4 className="font-semibold mb-4" data-oid="507iqi0">
                                Follow Us
                            </h4>
                            <ul className="space-y-2 text-gray-400" data-oid="r:c..k_">
                                <li data-oid="gj23x3.">Instagram</li>
                                <li data-oid="m2rypnh">Twitter</li>
                                <li data-oid="inpyrzm">Facebook</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
