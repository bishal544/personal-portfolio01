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
              Expected Graduation: 2029. Persistent learner with a focus on clarity, collaboration, and innovation in AI and Software Development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School Degree (Science)</h4>
                <h5>Nepal Police School, Sanga, Kavre</h5>
              </div>
              <h3>2082 BS</h3>
            </div>
            <p>
              Completed high school in the science stream with a cumulative GPA of 3.77.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
