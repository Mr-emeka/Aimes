import React from "react";

export default () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="about-section">
          <h3 className="text-center my-5" id="about-section">
            About Me
          </h3>
          <div className="row  px-lg-5">
            <div className="about-content">
              <div className="main-img d-none d-lg-block"></div>
              <div className="about-text">
                <div className="rounded-img d-md-none"></div>
                <div className="px-4">
                  <h5>Hello, I'm Ukpai Chukwuemeka</h5>
                  <p>
                    I love JavaScript and everything web. When my dev senses
                    kick-in I build presumably awesome stuff. I stay close to
                    the community and try to keep tabs with the pace at which
                    the web is evolving. I also like to blog what I learn. I
                    built this site from scratch. By scratch, I mean absolutely
                    from scratch without any UI library/framework (except React
                    though) and had so much fun along the way. React-Redux,
                    Node.js, JavaScript, HTML5, CSS3 , MongoDB and PostgresSQL
                    are the main tricks up my sleeve. I am also obsessed with
                    making the web look pretty with CSS.
                    <br></br>\ (•◡•) /
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
