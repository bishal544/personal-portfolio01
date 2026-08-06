import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Science</h4>
                <h5>King's College, Nepal</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expected Graduation: [2029]. Persistent learner with a focus on clarity, collaboration, and innovation in AI and Software Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
