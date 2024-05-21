import bridge from '../../assets/images/charles bridge.jpg'

export default function Y1786s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1786</time>
                <div className="text-3xl font-black">Charles River Bridge</div>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he Charles River Bridge was a significant infrastructure project completed in 1786. It was constructed to improve transportation and commerce between Boston and Charlestown, facilitating easier access across the Charles River.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">I</span>
                    t played a crucial role in the development of the northeastern United States, influencing transportation, communication, and urban development.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    his bridge was one of the first major projects to use private investment through a toll system, which was innovative at the time.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he bridge was designed by architect Charles Bullfinch and constructed by a private company chartered by the Massachusetts legislature. It featured wooden structures and was approximately 1,500 feet long and 42 feet wide.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he bridge significantly boosted trade and commerce by providing a reliable and direct route between Boston and the surrounding areas, reducing travel time and costs associated with ferry crossings.
                </p>
                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">18320</div>
                            <div className="stat-desc font-bold text-white">40% increase</div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={bridge} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}