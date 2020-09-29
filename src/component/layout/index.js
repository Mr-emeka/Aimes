import React from 'react';

import TopNav from '../../containers/navs/Navbar';
// import Sidebar from '../containers/navs/Sidebar';
// import Footer from '../../containers/navs/Footer';

export default ({ toggleTheme, theme, children, history }) => {
    return (<div id="app-container">
        <TopNav history={history} toggleTheme={toggleTheme} theme={theme} />
        {/* <Sidebar /> */}
        <main>
            <div className="container-fluid">{children}</div>
        </main>
        {/* <Footer /> */}
    </div>)

};


