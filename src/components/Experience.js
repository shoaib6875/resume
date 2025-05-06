function Experience() {
    const experiences = [
    

        {
            role: 'Devops associate',
            company: 'Finkeda solutions pvt ltd',
            duration: 'May 2024 - Oct 2024',
            description: [
              'Used to work on aws cli to manage servers',
              'Integrated MongoDB for data storage.',
              'Worked on various AWS services like ec2,Iam,rds etc',
            ],
          },
        {
            role: 'Frontend Developer (Freelance)',
            company: 'Client Project',
            duration: 'Mar 2024 - May 2024',
            description: [
              'Built a responsive web app with React and CSS.',
              'Integrated MongoDB for data storage.',
              'Used node js in backend.',
            ],
          },
    ];
  
    return (
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;


  