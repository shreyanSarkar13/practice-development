function Home() {
    return (
        <div className="home-page">
            <header className="home-header">
                <div className="home-logo">
                    <div className="home-logo-icon">I</div>
                    <span>Inventra</span>
                </div>

                <a href="/login" className="home-signin">
                    Sign in
                </a>
            </header>

            <main className="home-main">
                <div className="home-content">

                    <div className="home-badge">
                        Inventory Management
                    </div>

                    <h1>
                        Simple inventory.
                        <span> Better control.</span>
                    </h1>

                    <p>
                        Inventra helps you manage products, track inventory,
                        and keep your business organized from one simple workspace.
                    </p>

                    <a href="/login" className="home-get-started">
                        Get Started
                        <span>→</span>
                    </a>

                </div>
            </main>
        </div>
    );
}

export default Home;