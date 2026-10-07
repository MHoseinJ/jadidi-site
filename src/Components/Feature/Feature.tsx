import type { ReactNode } from "react";
import Window from "../Window/Window";
import "./Feature.css";

interface FeatureProps {
    title: string;
    description: string;
    children: ReactNode;
    side?: "left" | "right";
}

function Feature({
    title,
    description,
    children,
    side = "left",
}: FeatureProps) {
    return (
        <article className={`feature feature-${side}`}>
            <div className="feature-info">
                <h3>{title}</h3>

                <p>{description}</p>
            </div>

            <Window>
                {children}
            </Window>
        </article>
    );
}

export default Feature;