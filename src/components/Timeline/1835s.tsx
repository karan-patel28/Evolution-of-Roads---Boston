import TravelTimeChart from "../chart/Travel-Time";
import railroad from '../../assets/images/Boston_railroads_map.jpg';

export default function Y1835s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1835</time>
                <div className="text-3xl font-black">Boston & Lowell Railroad</div>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">P</span>
                    rimary Purpose: To connect Boston with Lowell, facilitating the transportation of goods and passengers.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">C</span>
                    onstruction Impact: Significant alterations to the landscape, including the leveling of Pemberton Hill to lay the railroad tracks.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">I</span>
                    <span>mpact on Travel Times:</span><br />
                    The establishment of the Boston & Lowell Railroad dramatically reduced travel times between the two cities. Prior to the railroad, travel by stagecoach between Boston and Lowell could take upwards of a full day. With the new railroad, this journey was reduced to just a couple of hours. This efficiency facilitated quicker movement of goods and people, significantly enhancing economic activities between the cities.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    ravel Time Reduction:
                    <br /><br />
                    <TravelTimeChart />
                </p>
                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">~93383</div>
                            <div className="stat-desc font-bold text-white">52% increase</div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={railroad} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}