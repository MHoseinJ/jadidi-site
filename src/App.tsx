function App() {
  return (
    <main className="dark">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-info">
            <p className="eyebrow">GAME ENGINE</p>
            <h1>Jadidi</h1>
            <p className="description"> A lightweight 2D game engine built with C++ and Lua. Designed to make building games simple, flexible, and fun. </p>
            <div className="actions"> <button>Documentation</button>
              <button>Download</button>
            </div>
          </div>
          <div className="window">
            <div className="window-header">
              <div className="window-buttons">
                <span>X</span>
              </div>
              <p>Jadidi</p>
            </div>
            <div className="window-content">
              <div className="window-text">
                <h2>Build your game.</h2>
                <p> Create scenes, control objects with Lua, and build your 2D game with Jadidi. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed max-width bottom glass flex border-top"> </div>
    </main>
  );
}

export default App;