import React from 'react';
import Layout from '../../layout'

export default ({ toggleTheme, theme }) => {
    return (<Layout toggleTheme={toggleTheme} theme={theme}>
        <h1>Home</h1>
    </Layout>
    )
}