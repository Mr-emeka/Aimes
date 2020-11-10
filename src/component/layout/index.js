import React, { useState } from "react";
import styled from 'styled-components'
import TopNav from "../../containers/navs/Navbar";
import Sidebar from "../../containers/navs/Sidebar";
import Footer from "../../containers/navs/Footer";

const Main = styled.main`
padding: 0px 150px;

@media(max-width:760px){
  padding:0;
}
`
export default ({ toggleTheme, theme, children, history }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="app-container">
      <TopNav
        history={history}
        toggleTheme={toggleTheme}
        theme={theme}
        open={open}
        setOpen={setOpen}
      />
      <Sidebar open={open} setOpen={setOpen} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
