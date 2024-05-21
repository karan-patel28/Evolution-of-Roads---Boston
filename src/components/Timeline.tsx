import Y1630s from "./Timeline/1630s";
import Y1673s from "./Timeline/1673";
import Y1786s from "./Timeline/1786s";
import Y1793 from "./Timeline/1793s";
import Y1806 from "./Timeline/1806";
import Y1807s from "./Timeline/1807s";
import Y1835s from "./Timeline/1835s";
import Y1850s from "./Timeline/1850s";
import Y1950s from "./Timeline/1950s";
import Y1960s from "./Timeline/1960s";
import Y1991s from "./Timeline/1991s";
import Y2007s from "./Timeline/2007s";

export default function Timeline() {
    return (
        <>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white text-lg mx-8">
                <li>
                    <Y1630s />
                    <hr />
                </li>
                <li>
                    <Y1673s />
                    <hr />
                </li>
                <li>
                    <Y1786s />
                    <hr />
                </li>
                <li>
                    <Y1793 />
                    <hr />
                </li>
                <li>
                    <Y1806 />
                    <hr />
                </li>
                <li>
                    <Y1807s />
                    <hr />
                </li>
                <li>
                    <Y1835s />
                    <hr />
                </li>
                <li>
                    <Y1850s />
                    <hr />
                </li>
                <li>
                    <Y1950s />
                    <hr />
                </li>
                <li>
                    <Y1960s />
                    <hr />
                </li>
                <li>
                    <Y1991s />
                    <hr />
                </li>
                <li>
                    <Y2007s />
                    <hr />
                </li>
            </ul>
        </>
    );
}
