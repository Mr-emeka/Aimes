import React from 'react'
import Toggler from '../../../component/custom/toggler/toggle'

export default ({ toggleTheme, theme, history }) => {

    return (<nav className="navbar fixed-top">
        <div className="d-flex align-items-center navbar-left">
            <span>Aimes.js</span>
        </div>
        <div className="navbar-right">
            <Toggler toggleTheme={toggleTheme} theme={theme} />
        </div>
    </nav>)
}