import roadsMap from '../../assets/images/Boston_area_colonial_map.jpg'

export default function Y1630s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1603</time>
                <div className="text-3xl font-black">Colonial Boston</div>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">I</span>n 1620, the Pilgrims established a community in Massachusetts after arriving on the Mayflower.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">B</span>y 1630, Puritan colonists led by John Winthrop founded Boston on the Shawmut Peninsula.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">E</span>arly road development began with Native American trails, which were expanded to connect settlements, supporting Boston's growth and integration.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>hese roads were essential for trade, communication, and the town's evolution into a bustling colonial hub.
                </p>
                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">1200</div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={roadsMap} alt="Boston Initial Road Network" />
            </div>
        </>
    );
}
