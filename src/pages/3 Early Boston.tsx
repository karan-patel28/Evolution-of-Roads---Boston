import boston from '../assets/images/boston-dark.webp';
import InitialRoads from '../components/Early Boston/Initial-Roads';
import Timeline from '../components/Timeline';
import TimelineText from '../components/Timeline-Text';

export default function HistoryPage() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${boston})`, backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>

            <div className="relative z-10">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <InitialRoads />
                    <TimelineText />
                    <Timeline />
                </div>
            </div>
        </div>
    )
}
