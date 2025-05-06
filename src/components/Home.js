function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Shoaib Akhtar</h1>
        <div className="home-tagline">
          <span>
            <i className="fas fa-code"></i> Frontend Developer
          </span>
          <span>
            <i className="fas fa-tools"></i> DevOps Explorer
          </span>
          <span>
            <i className="fas fa-brain"></i> AI & ML Learner
          </span>
        </div>
        <a href="#contact" className="home-cta">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Home;