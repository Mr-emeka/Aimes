import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import projects from "./helpers/projects";
import Loader from "./component/views/Loader";

const Home = React.lazy(() => import("./component/views/Home"));

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  projects={projects}
                  toggleTheme={toggleTheme}
                  theme={theme}
                />
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
