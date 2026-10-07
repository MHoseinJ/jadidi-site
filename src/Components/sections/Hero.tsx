import "./Hero.css";
import Window from "../Window/Window";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-info">
                    <p className="eyebrow">GAME ENGINE</p>

                    <h1>Jadidi</h1>

                    <p className="description">
                        A lightweight 2D game engine built with C++
                        and Lua. Designed to make building games
                        simple, flexible, and fun.
                    </p>

                    <div className="actions">
                        <button>Documentation</button>
                        <button>Download</button>
                    </div>
                </div>

                <Window>
                    <div className="window-text">
                        <h2>Build your game.</h2>

                        <p>
                            Create scenes, control objects with
                            Lua, and build your 2D game with
                            Jadidi.
                        </p>
                    </div>
                </Window>
            </div>
        </section>
    );
}

export default Hero;