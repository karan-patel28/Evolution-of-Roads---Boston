import house from '../../assets/images/African-Meeting-House.png'

export default function Y1806() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1806</time>
                <div className="text-3xl font-black">African Meeting House</div>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he African Meeting House, located at 46 Joy Street, Boston, was built in 1806 and is the oldest existing Black church building in the United States. 
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">I</span>
                    nitially serving as the African Baptist Church of Boston, it played a crucial role in the spiritual, cultural, and political life of Boston’s African American community.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">B</span>
                    uilt primarily by African American artisans, the meeting house was funded through efforts led by Cato Gardner, who raised $1,500. The building was constructed by both Black and white laborers.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">I</span>
                    t served not only as a church but also hosted educational classes, community meetings, and was a hub for abolitionist activities. Notable figures such as Frederick Douglass, William Lloyd Garrison, and Maria Stewart spoke here​​​​.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">F</span>
                    rom 1808 until 1835, the African School held classes in the meeting house, and it was a center for adult education and public lectures. The Massachusetts General Colored Association and the New England Anti-Slavery Society, founded by William Lloyd Garrison, also met here​​​​.
                </p>
                <p className="text-xl mt-2">
                    <span className="font-bold text-2xl text-orange-500">T</span>
                    he meeting house hosted numerous events, including annual celebrations of Haitian Independence and the end of the international slave trade​​.
                </p>
                <div className="flex justify-start">
                    <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                        <div className="stat">
                            <div className="stat-title font-bold text-white">Total Population</div>
                            <div className="stat-value">~33787</div>
                            <div className="stat-desc font-bold text-white">35% increase</div>
                        </div>
                    </div>
                </div>
                <img className="h-auto w-auto rounded-lg mt-4" src={house} alt="Boston Initial Road Network" />
            </div>
        </>
    )
}