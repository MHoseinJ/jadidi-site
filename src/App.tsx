import Hero from "./Components/sections/Hero";
import Features from "./Components/sections/Features";
import Download from "./Components/sections/Download";
import Taskbar from "./Components/Taskbar/Taskbar";

function App() {
    return (
        <main className="dark">
            <Hero />
            <Features />
            <Download />

            <Taskbar />
        </main>
    );
}

export default App;