import road from '../../assets/images/Plan-Central-Artery-Tunnel-project-Boston.png'

export default function Y1956s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1956</time>
                <div className="text-3xl font-black">Central Artery (John F. Fitzgerald Expressway)</div>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he Central Artery, officially known as the John F. Fitzgerald Expressway, was a major infrastructure project in Boston that began construction in the early 1950s and opened in 1956.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">I</span>
                    t was an elevated highway running through the heart of downtown Boston, designed to alleviate traffic congestion and modernize the city’s transportation network.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">N</span>
                    umber of Displaced Residents and Businesses: Over 20,000 people and numerous businesses were displaced due to the construction of the Central Artery. This significant displacement was a result of the highway cutting through several densely populated neighborhoods​​​​.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">C</span>
                    onstruction Materials and Costs: The project used approximately 92,000 tons of steel and 459,000 tons of concrete, with an initial cost estimate of $110 million. The expressway was designed to handle about 90,000 vehicles daily​​.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    raffic and Congestion: Initially hailed as an engineering marvel, the Central Artery quickly became notorious for severe congestion, earning the nickname "The Distressway." By the 1990s, it was handling over 190,000 vehicles daily, far exceeding its capacity​​​​.
                </p>
                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">697197</div>
                            <div className="stat-desc font-bold text-white">13% decrease</div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={road} alt="Boston Initial Road Network" />
            </div>
        </> 
    )
}