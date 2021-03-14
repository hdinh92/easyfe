import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import PhotoPage from "features/PhotoPage/PhotoPage";
import React from "react";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <Banner />
        <Router>
          {/* <AppWithRouterAccess /> */}
          <PhotoPage />
        </Router>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
