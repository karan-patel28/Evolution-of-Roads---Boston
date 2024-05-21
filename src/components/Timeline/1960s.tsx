import southWest from '../../assets/images/southwest.jpg'

export default function Y1960s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1960-1970</time>
                <div className="text-3xl font-black">Southwest Corridor Project</div>
                <div className='md:text-start'>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he Southwest Corridor Project was a major urban renewal initiative in Boston during the 1960s and 1970s. Initially planned as a highway, the project faced significant public opposition due to the potential displacement of communities and environmental concerns.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">C</span>
                        onsequently, the project was re-envisioned to convert the proposed highway land into a multi-use transit and park space.
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
                        <span className="font-bold text-2xl text-orange-500">K</span>ey Changes and Impact:
                        <ul className="list-disc ml-5 mt-2">
                            <li><span className="font-bold">Conversion to Transit and Park Spaces:</span> The project included the construction of the Orange Line rapid transit and commuter rail lines along with extensive parklands and community facilities.</li>
                            <li><span className="font-bold">Public Transit Usage:</span> The transformation led to a significant increase in public transit ridership. By the 1980s, there was a reported 20% increase in ridership on the newly established Orange Line.</li>
                            <li><span className="font-bold">Green Space Addition:</span> The project added substantial green spaces, creating parks, playgrounds, and community gardens, thereby enhancing the urban environment and providing recreational areas for residents.</li>
                        </ul>
                    </p>

                    <div className="flex justify-end">
                        <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                            <div className="stat">
                                <div className="stat-title font-bold text-white">Total Population</div>
                                <div className="stat-value">641071</div>
                                <div className="stat-desc font-bold text-white">8% decrease</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={southWest} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}