import React from 'react';

const About = () => (
  <div className="section section--about u-text-center">
    <div>
      <h2>About Pool19</h2>
      <p className="large">
        Right now, there are strange times in our society because of the covid-19 pandemic. This has
        affected our entire society on many different levels. We would like to help local smaller
        companies to get through this time.
      </p>
    </div>
    <div id="ineedsupport">
      🙏🏻
      <h2>I need support</h2>
      <p className="large">
        <span className="u-bold">Step 1</span> – Register your business here and your need <br />
        <span className="u-bold">Step 2</span> – Your business will be published/ on this site
        <br />
        <span className="u-bold">Step 3</span> – Wait for supporters to contact you by email
      </p>
      <a
        className="typeform-share button"
        href="https://mariasjodin.typeform.com/to/ObNXYj"
        data-mode="popup"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register for support 🙏🏻
      </a>
    </div>
    <div id="iwanttosupport">
      💛
      <h2>I want to support</h2>
      <p className="large">
        <span className="u-bold">Step 1</span> – Find a business on the list you want to support
        <br />
        <span className="u-bold">Step 2</span> – Get in touch with the company by using “Give
        support” <br />
        <span className="u-bold">Step 3</span> – Agree on how you can support the company
      </p>
      <a href="#list">Find a company 💛</a>
    </div>
  </div>
);
export default About;
