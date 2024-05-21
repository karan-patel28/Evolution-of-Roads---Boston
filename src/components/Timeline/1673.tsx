import roadsMap from '../../assets/maps/Boston_Post_Road_map.png'

export default function Y1673s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1673-1730s</time>
                <div className="text-3xl font-black">Boston Post Road</div>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he Boston Post Road is a historical route in the United States, originally established as a mail route between New York City and Boston.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">I</span>
                    t played a crucial role in the development of the northeastern United States, influencing transportation, communication, and urban development.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">E</span>arly road development began with Native American trails, which were expanded to connect settlements, supporting Boston's growth and integration.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>hese roads were essential for trade, communication, and the town's evolution into a bustling colonial hub.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">T</span>he Boston Post Road consisted of three main routes: the Upper Post Road (inland route through Worcester, MA, and Hartford, CT), the Lower Post Road (coastal route through New Haven, CT, and Providence, RI), and the Middle Post Road (combining elements of the upper and lower roads).
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">K</span>ey milestones include the first recorded mail service in 1673, Sarah Kemble Knight's documented journey in 1704, and Benjamin Franklin's introduction of milestones in 1772.
                </p>
                <p className="text-xl">
                    <span className="font-bold text-2xl text-orange-500">M</span>odern influence of the road includes its preservation for historical value, influence on modern highways, and significance in early American infrastructure.
                </p>
                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">13000</div>
                            <div className="stat-desc font-bold text-white">983% more increase due to increased trade</div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={roadsMap} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}
