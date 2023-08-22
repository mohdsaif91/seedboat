import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const UserRole = React.lazy(() => import("./Pages/UserRole/UserRole"));
const Founder = React.lazy(() => import("./Pages/Founder/Founder"));
const Investor = React.lazy(() => import("./Pages/Investor/Investor"));
const ServiceProvider = React.lazy(() =>
  import("./Pages/ServiceProvider/ServiceProvider")
);
const StartUp = React.lazy(() => import("./Pages/StartUp/StartUp"));
const InvestorAcknowledgMent = React.lazy(() =>
  import("./Pages/Investor/InvestorAcknowledgment/InvestorAcknowledgMent")
);
const InvestmentExplore = React.lazy(() =>
  import("./Pages/Investor/Investmentopportunitie/InvestmentOpportunities")
);
const InvestorProfile = React.lazy(() =>
  import("./Pages/Investor/InvestorProfile/InvestorProfile")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/userRole"
          element={
            <Suspense>
              <UserRole />
            </Suspense>
          }
        />
        <Route
          path="/investor"
          element={
            <Suspense>
              <Investor />
            </Suspense>
          }
        />
        <Route
          path="/serviceProvider"
          element={
            <Suspense>
              <ServiceProvider />
            </Suspense>
          }
        />
        <Route
          path="/founder"
          element={
            <Suspense>
              <Founder />
            </Suspense>
          }
        />
        <Route
          path="/startUp"
          element={
            <Suspense>
              <StartUp />
            </Suspense>
          }
        />
        <Route
          path="/investorAcknowledgMent"
          element={
            <Suspense>
              <InvestorAcknowledgMent />
            </Suspense>
          }
        />
        <Route
          path="/investmentExploer"
          element={
            <Suspense>
              <InvestmentExplore />
            </Suspense>
          }
        />
        <Route
          path="/investorProfile"
          element={
            <Suspense>
              <InvestorProfile />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
