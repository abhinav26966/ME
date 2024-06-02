import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Skills</h2>
        <div className="projects-link">
            <p>All the links are available on my <a href="https://github.com/abhinav26966">Github</a></p>
        </div>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-project-diagram"></i>
              <div className="text">Java and Spring End-to-End Projects</div>
              <p>
                <strong>Course Registration System</strong> | Java, JavaFX, SQL, JDBC, Scene Builder, Git <br />
                June 2024 – May 2024
                < br/>
                < br/>
                <hr/>
                < br/>
                <ul>
                  <li>Developed a course registration system using Java and JavaFX for building a user-friendly desktop interface.</li>
                  <li>Implemented an SQLite database and utilized JDBC for seamless data storage and retrieval.</li>
                  <li>Employed OOP principles to create a modular and scalable codebase, ensuring maintainability and extensibility.</li>
                  <li>Utilized Git and GitHub for collaborative development and version management.</li>
                  <li>Maintained clear and concise documentation throughout the project, facilitating collaboration and knowledge sharing within the team.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fas fa-database"></i>
              <div className="text">Data Analysis</div>
              <p>
                <strong>Yulu Analysis</strong> | Python, Pandas, NumPy, Matplotlib, Seaborn, Folium, Jupyter <br />
                June 2024 – May 2024
                < br/>
                < br/>
                <hr/>
                < br/>
                <ul>
                  <li>Conducted exploratory data analysis and visualization on a dataset using Python and libraries like Pandas, NumPy, and Matplotlib.</li>
                  <li>Performed data cleaning, transformation, and feature engineering to prepare the dataset for analysis.</li>
                  <li>Employed various visualization techniques, including static plots, statistical graphics, and interactive maps, using libraries like Seaborn and Folium.</li>
                  <li>Documented the entire analysis process, combining code, visualizations, and explanations in an interactive Jupyter Notebook.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Spring End-to-End Projects</div>
              <p>
                <strong>Parking Lot</strong> | Java, OOP, CLI, Enums <br />
                June 2024 – June 2024
                < br/>
                < br/>
                <hr/>
                < br/>
                <ul>
                  <li>Developed a parking lot system using Java, implemented as a command-line interface (CLI) application.</li>
                  <li>Employed object-oriented principles to model parking lot components, such as vehicles, parking spots, and lots.</li>
                  <li>Incorporated robust exception handling mechanisms to ensure application stability and reliability.</li>
                  <li>Followed best practices for code organization, maintainability, and extensibility, ensuring long-term sustainability of the project.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fas fa-search"></i>
              <div className="text">Data Scraping Projects</div>
              <p>
                <strong>E-commerce Price Scraper</strong> | Python, BeautifulSoup, Selenium, Chrome WebDriver <br />
                Nov 2024 – Dec 2024
                < br/>
                < br/>
                <hr/>
                < br/>
                <ul>
                  <li>Developed a web scraping application using Python to extract product price data from e-commerce websites.</li>
                  <li>Implemented scraping techniques for both static HTML pages (using BeautifulSoup) and dynamic JavaScript-rendered content (using Selenium).</li>
                  <li>Utilized Selenium and Chrome WebDriver for automating web browser interactions and scraping dynamic web pages.</li>
                  <li>Extracted and parsed relevant data from HTML and JavaScript-rendered pages using web scraping libraries.</li>
                  <li>Followed best practices and ethical guidelines for web scraping, respecting website terms of service and minimizing server load.</li>
                </ul>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
