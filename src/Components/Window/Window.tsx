import type { ReactNode } from "react";
import "./Window.css";
import logo from "../../assets/logo.svg"

interface WindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
}

function Window({
    title = "Jadidi",
    children,
    className = "",
    contentClassName = "",
}: WindowProps) {
    return (
        <div className={`window ${className}`}>
            <div className="window-header">
                <img
                    className="window-logo"
                    src={logo}
                    alt="Jadidi"
                />

                <p>{title}</p>

                <div className="window-buttons">
                    <span>×</span>
                </div>
            </div>

            <div className={`window-content ${contentClassName}`}>
                {children}
            </div>
        </div>
    );
}

export default Window;