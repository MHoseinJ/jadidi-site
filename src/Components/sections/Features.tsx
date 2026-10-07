import Feature from "../Feature/Feature";
import Window from "../Window/Window";
import "./Features.css";

function Features() {
    return (
        <section id="features" className="features">
            <div className="features-heading">
                <p>WHAT JADIDI CAN DO</p>

                <h2>Features</h2>
            </div>

            <div className="features-list">
                <Feature
                    title="Lua Scripting"
                    description="Control your game objects and gameplay logic with Lua while keeping the engine itself lightweight and fast."
                    side="left"
                >
                    <div className="feature-showcase">
                        <pre>
                            <code>{`function player:update(dt)
    self:move(dt)
end

function player:jump()
    self.velocity.y = 10
end`}</code>
                        </pre>
                    </div>
                </Feature>

                <Feature
                    title="Component System"
                    description="Build game objects from simple components such as Transform, Sprite, Animator, Rigidbody and Collider."
                    side="right"
                >
                    <div className="feature-showcase component-showcase">
                        <p>GameObject</p>

                        <span>Transform</span>
                        <span>Sprite</span>
                        <span>Animator</span>
                        <span>Rigidbody</span>
                        <span>BoxCollider</span>
                    </div>
                </Feature>

                <Feature
                    title="2D Physics"
                    description="Give your game objects physical behaviour with the integrated Box2D-based physics system."
                    side="left"
                >
                    <div className="feature-showcase physics-showcase">
                        <div className="physics-box" />
                        <div className="physics-ground" />
                    </div>
                </Feature>
            </div>
        </section>
    );
}

export default Features;