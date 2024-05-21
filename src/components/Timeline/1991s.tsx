import zakim from '../../assets/images/zakim bridge.png'

export default function Y1991s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1991-2007</time>
                <div className="text-3xl font-black">The Big Dig</div>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he Big Dig, formally known as the Central Artery/Tunnel Project, was a massive infrastructure project in Boston aimed at addressing the city's traffic congestion problems by replacing the elevated Central Artery (Interstate 93) with an underground tunnel system.
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
                    <span className="font-bold text-2xl text-orange-500">Z</span>
                    akim bridge was part of the Big Dig project, which was completed in 2002. The bridge is named after civil rights activist Lenny Zakim and is one of the widest cable-stayed bridges in the world.
                </p>
                <img className="h-auto w-auto rounded-lg mt-4" src={zakim} alt="Boston Initial Road Network" />
                <p className="text-xl mt-4">
                    <span className="font-bold text-2xl text-orange-500">K</span>
                    ey Data:
                </p>
                <ul className="list-disc list-inside text-xl mt-2">
                    <li>
                        <span className="font-bold">Project Costs:</span> $15 billion
                        <p>The project became one of the most expensive highway projects in the United States, with costs reaching approximately $15 billion by its completion.</p>
                    </li>
                    <li>
                        <span className="font-bold">Traffic Improvement:</span> 62% reduction in downtown traffic congestion
                        <p>The underground tunnel significantly alleviated traffic congestion in downtown Boston, reducing it by about 62%.</p>
                    </li>
                    <li>
                        <span className="font-bold">Green Space Created:</span> 27 acres of parkland
                        <p>The project included the creation of the Rose Fitzgerald Kennedy Greenway, a series of parks and green spaces totaling 27 acres, which replaced the former elevated highway.</p>
                    </li>
                </ul>

                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">~579491</div>
                            <div className="stat-desc font-bold text-white">9% decrease</div>
                        </div>
                    </div>
                </div>
                {/* <img className="h-auto w-auto rounded-lg mt-4" src={southWest} alt="Boston Initial Road Network" /> */}
            </div>
        </>
    )
}