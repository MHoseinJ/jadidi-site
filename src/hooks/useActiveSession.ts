import { useEffect, useState } from "react";
import { sections } from "../config/sections";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const elements = sections
            .map((section) => document.getElementById(section.id))
            .filter((element): element is HTMLElement => element !== null);

        if (elements.length === 0)
            return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (visible.length > 0)
                    setActiveSection(visible[0].target.id);
            },
            {
                threshold: [0.25, 0.5, 0.75],
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return activeSection;
}