import { sections } from "../../config/sections";
import { useActiveSection } from "../../hooks/useActiveSession";
import "./Taskbar.css";

function Taskbar() {
    const activeSection = useActiveSection();

    function scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <nav className="taskbar">
            {sections.map((section) => (
                <button
                    key={section.id}
                    className={
                        activeSection === section.id
                            ? "taskbar-item active"
                            : "taskbar-item"
                    }
                    onClick={() => scrollToSection(section.id)}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
}

export default Taskbar;