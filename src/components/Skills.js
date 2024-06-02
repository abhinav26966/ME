import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">Projects and Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">PROJECTS</div>
            <p>
              <li className="project">
                <a href="https://github.com/abhinav26966/Course-Registration-System-Project">
                  Course Registration System :
                </a>
                <br />
                (Java, JavaFX, SQL, JDBC, Scene Builder)
                <br />
              </li>
              <li className="project">
                <a href="https://github.com/abhinav26966/Yulu-Analysis">
                  Yulu Analysis :
                </a>
                <br />
                (Python, Pandas, NumPy, Matplotlib, Seaborn, Folium, Jupyter)
              </li>
              <li className="project">
                <a href="https://github.com/abhinav26966/Parking-Lot">
                  Parking Lot :
                </a>
                <br />
                (Java, OOP, CLI, Enums)
              </li>

              <li className="project">
                <a href="https://github.com/abhinav26966/EcommercePriceScraper">
                  E-commerce price Scrapper :
                </a>
                <br />
                (Python, BeautifulSoup, Selenium, Chrome WebDriver)
              </li>
            </p>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML, CSS and JS</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java and its libraries</span>
                <span>90%</span>
              </div>
              <div className="line java"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python and its libraries</span>
                <span>70%</span>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React, NodeJS and its libraries</span>
                <span>40%</span>
              </div>
              <div className="line react"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
