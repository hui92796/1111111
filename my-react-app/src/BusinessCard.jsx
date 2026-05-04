export default function BusinessCard({ name, title, email, phone, skills }) {
    return (
      <div className="card">
        <h2 className="card-name">{name}</h2>
        <p className="card-title">{title}</p>
        <hr />
        <div className="card-info">
          <p>📧 {email}</p>
          <p>📞 {phone}</p>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    );
  }