import road from '../../assets/images/Massachusetts_Route_128.png'

export default function Y1950s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1950</time>
                <div className="text-3xl font-black">Route 128</div>
                <div className='md:text-start'>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">R</span>
                        oute 128, also known as the Yankee Division Highway, was completed in the 1950s and played a pivotal role in the economic and technological development of the Greater Boston area.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he initial section of Route 128 was built between Wakefield and Danvers from 1936 to 1941, but further expansion was paused during World War II. Construction resumed in 1951 and was completed in 1956, stretching 65 miles from Gloucester to Braintree​​​​.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">B</span>
                        etween 1950 and 1957, Route 128 saw nearly $100 million in capital investment. By 1959, investments had soared to $500 million. This rapid influx of capital was instrumental in transforming the area into a hub of economic activity​​​​.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">D</span>
                        evelopers like Cabot, Cabot & Forbes recognized the potential of Route 128 and developed the New England Industrial Center in Needham, which became a prototype for modern industrial parks. These parks offered warehouse, manufacturing, and office space, attracting numerous businesses​​​​.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he number of businesses along Route 128 grew from 53 in 1955 to 223 in 1959, and to 729 by 1967, with 66,000 employees working in the area. This growth was driven by the availability of open space, inexpensive land, and proximity to top research institutions like MIT and Harvard​​​​.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">R</span>
                        oute 128 became known as "America's Technology Highway," with major companies like Raytheon, GTE, and Polaroid establishing operations there. The tech industry along Route 128 was a precursor to Silicon Valley, fostering a high-tech industrial cluster that leveraged the region's strong research capabilities and entrepreneurial spirit​​.
                    </p>
                    <div className="flex justify-end">
                        <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                            <div className="stat">
                                <div className="stat-title font-bold text-white">Total Population</div>
                                <div className="stat-value">801444</div>
                                <div className="stat-desc font-bold text-white">758% increase</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={road} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}