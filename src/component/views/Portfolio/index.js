import React from 'react'
import Card from '../../custom/Card'


export default ({ projects,ref }) => {
    return <>
        <div className="container-fluid px-4 mb-5">
            <div className="portfolio-section" ref={ref} id="portfolio">
                <h3 className="text-center my-5">Portfolio</h3>
                <div>
                    <div className="grid">
                        {projects.map(({ projectName, description, liveURL, technologyUsed },i) => {
                            return <Card key={i} projectName={projectName} description={description} liveURL={liveURL} technologyUsed={technologyUsed} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
}