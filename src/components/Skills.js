function Skills() {
    const languages = [
      { name: 'JavaScript', icon: 'fab fa-js' },
      { "name": "C++", "icon": "fas fa-code" },
      // { name: 'CSS', icon: 'fab fa-css3-alt' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'Python', icon: 'fab fa-python' },
    ];
  
    const libraries = [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'Express.js', icon: 'fas fa-server' },
    ];
  
    const coreSkills = [
      { "name": "Data Structure", "icon": "fas fa-sitemap" },
      { name: 'DevOps', icon: 'fas fa-tools' },
      { name: 'AI & ML', icon: 'fas fa-brain' },
      { name: 'Docker', icon: 'fab fa-docker' },
    ];
  
    return (
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skills-grid">
              {languages.map((skill, index) => (
                <div key={index} className="skill-card">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Libraries</h3>
            <div className="skills-grid">
              {libraries.map((skill, index) => (
                <div key={index} className="skill-card">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Core Skills</h3>
            <div className="skills-grid">
              {coreSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;