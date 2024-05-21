import pond from '../../assets/images/mill pond.png'
import hill from '../../assets/images/Beacon Hill.png'
import land from '../../assets/images/land.webp'

export default function Y1807s() {
    return (
        <>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-3xl font-bold">1807-1828</time>
                <div className="text-3xl font-black">Land Reclamation Projects</div>
                <div className='md:text-start'>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">D</span>
                        uring the early 19th century, Boston underwent significant land reclamation projects to accommodate its growing population and economic activities.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">T</span>
                        he process involved leveling or reducing the height of hills and using the excavated material to fill in adjacent tidal flats, marshes, and ponds. This practice transformed the city’s geography and significantly expanded its usable land area.
                    </p>
                    <p className="text-xl mt-2">
                        <span className="font-bold text-2xl text-orange-500">K</span>
                        ey Projects and Details:
                    </p>
                    <p className="text-xl mt-2">
                        <ul>
                            <li>
                                <span className="font-bold text-2xl text-orange-500">M</span>
                                ill Pond Reclamation (1807-1828):
                                <ul className="ml-6 list-disc">
                                    <li>
                                        Mill Pond was a 50-acre body of water that was filled in using soil from Beacon Hill and Copp’s Hill.
                                    </li>
                                    <li>
                                        The project started in 1807 and was completed in 1828.
                                    </li>
                                    <li>
                                        Soil from Beacon Hill was carted down and used as fill, lowering the hill by approximately 60 feet in height.
                                    </li>
                                    <li>
                                        The area reclaimed from Mill Pond added 50 acres of developable land to Boston.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <img className="h-auto w-auto rounded-lg mt-4" src={pond} alt="Boston Initial Road Network" />
                    <p className="text-xl mt-4">
                        <ul>
                            <li>
                                <span className="font-bold text-2xl text-orange-500">B</span>
                                eacon Hill and Copp's Hill Reductions:
                                <ul className="ml-6 list-disc">
                                    <li>
                                        Beacon Hill was significantly reduced, and the soil was used for land reclamation projects like the Mill Pond.
                                    </li>
                                    <li>
                                        Copp’s Hill was similarly excavated, with soil used to fill other low-lying areas.
                                    </li>
                                    <li>
                                        These reductions were part of broader efforts to create a more manageable and navigable city landscape.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <img className="h-auto w-auto rounded-lg mt-4" src={hill} alt="Boston Initial Road Network" />
                    <p className="text-xl mt-4">
                        <ul>
                            <li>
                                <span className="font-bold text-2xl text-orange-500">L</span>
                                and Area Before and After Reclamation:
                                <ul className="ml-6 list-disc">
                                    <li>
                                        Before reclamation, Boston's land area was limited to the Shawmut Peninsula, approximately 783 acres in size.
                                    </li>
                                    <li>
                                        After these extensive reclamation projects, Boston’s land area increased by about 300 acres, representing a 38% increase in land mass.
                                    </li>
                                    <li>
                                        These efforts were part of a series of projects that eventually added about 60% more land to the original peninsula by the late 19th century.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <img className="h-auto w-auto rounded-lg mt-4" src={land} alt="Boston Initial Road Network" />
                    <p className="text-xl mt-4">
                        <ul>
                            <li>
                                <span className="font-bold text-2xl text-orange-500">I</span>
                                mpact and Legacy:
                                <ul className="ml-6 list-disc">
                                    <li>
                                        The reclaimed land facilitated the development of significant new neighborhoods and commercial districts.
                                    </li>
                                    <li>
                                        Notable areas created include the North End and the modern Bulfinch Triangle.
                                    </li>
                                    <li>
                                        The increased land area allowed for the expansion of the city’s infrastructure, including new roads, residential buildings, and public spaces.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <div className="flex justify-end">
                        <div className="stats shadow bg-opacity-30 bg-gray-800 text-white rounded-lg">
                            <div className="stat">
                                <div className="stat-title font-bold text-white">Total Population</div>
                                <div className="stat-value">~61392</div>
                                <div className="stat-desc font-bold text-white">82% increase</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img className="h-auto w-auto rounded-lg mt-4" src={house} alt="Boston Initial Road Network" /> */}
            </div>
        </>
    )
}