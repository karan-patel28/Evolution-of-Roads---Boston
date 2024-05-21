import image from '../../assets/maps/boston_1634.png';
import image1 from '../../assets/maps/boston_1634_Imagination.webp';

export default function InitialRoads() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center shadow-lg rounded-lg overflow-hidden w-full lg:w-4/5">
                <div className="w-full lg:w-1/2 p-4">
                    <img src={image} alt="New England 1600" className="w-full h-auto rounded-lg" />
                    <p className="text-lg lg:text-xl text-white font-bold mb-4 mt-4">
                        These rudimentary roads facilitated local trade and communication among settlers, forming the backbone of Boston's early economy.
                    </p>
                    <p className="text-lg lg:text-xl text-white font-bold mb-4 mt-4">
                        The establishment of the Boston Post Road in 1673 was a significant development, enhancing mail delivery and travel between towns.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Early Roads in Colonial Boston
                    </h2>
                    <p className="text-lg lg:text-xl text-white font-bold mb-4">
                        When the Puritans settled in Boston in 1630, the Shawmut Peninsula's hilly terrain and marshes influenced the layout of the early road network.
                    </p>
                    <p className="text-lg lg:text-xl text-white font-bold mb-4">
                        Early roads were often simple paths connecting key locations like the marketplace, meeting house, and wharves.
                    </p>
                    <p className="text-lg lg:text-xl text-white font-bold mb-4">
                        European explorers, including fishermen and traders, began frequenting the New England coast.
                        These interactions introduced diseases that devastated the native population.
                    </p>
                    <img src={image1} alt="New England 1600" className="h-auto w-auto rounded-lg mt-4" />
                </div>
            </div>
        </div>
    )
}