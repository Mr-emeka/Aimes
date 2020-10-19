import React from "react";
import Card from "../../custom/Card";

export default ({ projects, details, setDetails, modalShow, setModalShow }) => {
  return (
    <>
      <div className="container-fluid px-4 mb-5">
        <div className="portfolio-section" id="portfolio-section">
          <h3 className="text-center my-5">Portfolio</h3>
          <div>
            <div className="grid">
              {projects.map(
                (
                  {
                    projectName,
                    description,
                    liveURL,
                    technologyUsed,
                    gitRepository,
                    imageURL,
                  },
                  i
                ) => {
                  return (
                    <Card
                      key={i}
                      projectName={projectName}
                      description={description}
                      liveURL={liveURL}
                      technologyUsed={technologyUsed}
                      gitRepository={gitRepository}
                      imageURL={imageURL}
                      modalShow={modalShow}
                      setModalShow={setModalShow}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
