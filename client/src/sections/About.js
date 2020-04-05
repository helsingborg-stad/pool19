import React from 'react';

const About = () => (
  <div>
    <div>
      <h2>About Pool19</h2>
      <p>
        Right now, there are strange times in our society because of the covid-19 pandemic. This has
        affected our entire society on many different levels. We would like to help local smaller
        companies to get through this time.
      </p>
    </div>
    <div id="ineedsupport">
      🙏🏻
      <h2>I need support</h2>
      <p>
        Step 1 – Register your business here and your need <br />
        Step 2 – Your business will be published/ on this site <br />
        Step 3 – Wait for supporters to contact you by email
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
      <p>
        Step 1 – Find a business on the list you want to support <br />
        Step 2 – Get in touch with the company by using “Give support” <br />
        Step 3 – Agree on how you can support the company
      </p>
      <a href="#list">Find a company 💛</a>
    </div>
  </div>
);
export default About;
