import "./Hero.css"
import logo from "../../assets/logo.svg"

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
                <div className="window">
                                    <div className="window-header">
                                        <img
                                            className="window-logo"
                                            src={logo}
                                            alt="Jadidi"
                                        />
                
                                        <p>Jadidi</p>
                
                                        <div className="window-buttons">
                                            <span>×</span>
                                        </div>
                                    </div>
                
                                    <div className="window-content">
                                        <div className="window-text">
                                            <h2>Build your game.</h2>
                
                                            <p>
                                                Create scenes, control objects with
                                                Lua, and build your 2D game with
                                                Jadidi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
            </div>
        </section>
    );
}

export default Hero;