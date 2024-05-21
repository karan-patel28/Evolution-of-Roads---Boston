import bridge from '../../assets/images/West Boston Bridge.png';

export default function Y1793() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1793</time>
                <div className="text-3xl font-black">West Boston Bridge</div>
                <div className='md:text-start'>
                    <p className="text-xl">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he West Boston Bridge, which was later replaced by the Longfellow Bridge, was completed in 1793. It was the first major bridge to span the Charles River, connecting Boston to Cambridge.
                    </p>
                    <p className="text-xl">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he bridge significantly improved accessibility between Boston and Cambridge, leading to commercial and residential development in both areas.
                    </p>
                    <p className="text-xl">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he bridge was financially successful, as it replaced the ferry service that previously connected Boston and Charlestown. This allowed for easier and more efficient travel across the river, encouraging economic activities in Cambridgeport and East Cambridge
                    </p>
                    <p className="text-xl">
                        <span className="font-bold text-2xl text-orange-500">G</span>
                        rowth of Cambridgeport and East Cambridge: Following the construction of the bridge, these areas saw increased commercial and industrial growth, transforming them into new economic centers of the community.
                    </p>
                    <div className="flex justify-end">
                        <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                            <div className="stat">
                                <div className="stat-title font-bold text-white">Total Population</div>
                                <div className="stat-value">~24937</div>
                                <div className="stat-desc font-bold text-white">36% increase</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={bridge} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}