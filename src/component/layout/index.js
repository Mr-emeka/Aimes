import React, { useState } from 'react';

import TopNav from '../../containers/navs/Navbar';
import Sidebar from '../../containers/navs/Sidebar';
import Footer from '../../containers/navs/Footer';

export default ({ toggleTheme, theme, children, history }) => {
    const [open, setOpen] = useState(false)

    return (<div id="app-container">
        <TopNav history={history} toggleTheme={toggleTheme} theme={theme} open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <main>
            {children}
        </main>
        <Footer />
    </div>)

};


