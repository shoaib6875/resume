import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent!');
        setSubmittedMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        ]);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setSuccessMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-links">
          <p>
            <i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: 'var(--accent-color)' }}></i>
            Email:{' '}
            <a href="mailto:shoaibakhtar14082002@gmail.com">
            shoaibakhtar14082002@gmail.com
            </a>
          </p>
          <p>
            <i className="fab fa-linkedin" style={{ marginRight: '0.5rem', color: 'var(--accent-color)' }}></i>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/shoaib-akhtar-a8a07b220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shoaib-akhtar
            </a>
          </p>
          <p>
            <i className="fab fa-github" style={{ marginRight: '0.5rem', color: 'var(--accent-color)' }}></i>
            GitHub:{' '}
            <a
              href="https://github.com/shoaib-akhtar"
              target="_blank"
              rel="noopener noreferrer"
            >
              shoaib-akhtar
            </a>
          </p>
          <p>
            <i className="fas fa-file-pdf" style={{ marginRight: '0.5rem', color: 'var(--accent-color)' }}></i>
            Resume:{' '}
            <a
              href="https://drive.google.com/file/d/160V2SftcXzHPD7u5cgnxUTyiL3WTvuog/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View Resume
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-input"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
        {submittedMessages.length > 0 && (
          <div className="message-list">
            <h3>Submitted Messages</h3>
            {submittedMessages.map((msg) => (
              <div key={msg.id} className="message-card">
                <p>
                  <strong>Name:</strong> {msg.name}
                </p>
                <p>
                  <strong>Email:</strong> {msg.email}
                </p>
                <p>
                  <strong>Message:</strong> {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;