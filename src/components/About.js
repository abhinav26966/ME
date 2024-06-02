import React from "react";

const About = () => {
return (
    <section className="about" id="about">
    <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
        <div className="column left">
            <img src="https://source.unsplash.com/user/ajeetmestry" alt="Profile" />
        </div>
        <div className="column right">
            <div className="text">Who am I : <span className="typing-2"></span></div>
            <p>I am a Fresher who is Looking for an entry-level position in a reputable organization where I can apply my skills and expand my knowledge in my field. Able to quickly learn and adapt to new technologies.</p>
            <br />
            <div className="text">Why you should hire me:</div>
            <p>I excel in communication and am dedicated to spending the necessary time to thoroughly understand the customer's problem..</p>
        </div>
        </div>
    </div>so
    </section>
);
};

export default About;
