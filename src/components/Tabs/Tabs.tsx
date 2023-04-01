import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabsStyles from "./Tabs.module.scss";
import data from "../../data.json";

const Tabs: React.FC = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={TabsStyles.tabs}>
            <img src={data.destinations[selected].images.webp} alt="Moon" />
            <div className={TabsStyles.container}>
                <ul>
                    {data.destinations.map((destination, i) => (
                        <li key={uuid()} className={i === selected ? TabsStyles.active : ""}>
                            <span onClick={() => setSelected(i)} tabIndex={0} role="button">
                                {destination.name}
                            </span>
                        </li>
                    ))}
                </ul>
                <article>
                    <h2>{data.destinations[selected].name}</h2>
                    <p>{data.destinations[selected].description}</p>
                    <div className={TabsStyles.section}>
                        <div>
                            <h3>Avg. distance</h3>
                            <span>{data.destinations[selected].distance}</span>
                        </div>
                        <div>
                            <h3>Est. travel time</h3>
                            <span>{data.destinations[selected].travel}</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};
export default Tabs;
