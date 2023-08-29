import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const UserRole = React.lazy(() => import("./Pages/UserRole/UserRole"));
const Founder = React.lazy(() => import("./Pages/Mentor/Mentor"));
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
const StartUpOnboarding = React.lazy(() =>
  import("./Pages/StartUp/StartUpOnboarding/StartUpOnboarding")
);
const StartUpDetialsPage = React.lazy(() =>
  import("./Pages/StartUp/StartUpDetialsPage/StartUpDetialsPage")
);
const ProjectOverview = React.lazy(() =>
  import("./Pages/StartUp/ProjectOverview/ProjectOverview")
);
const BecomeMentor = React.lazy(() =>
  import("./Pages/Mentor/BecomeMentor/BecomeMentor")
);
const BecomeMentorSteps = React.lazy(() =>
  import("./Pages/Mentor/BecomeMentorSteps/BecomeMentorSteps")
);
const MentorList = React.lazy(() =>
  import("./Pages/Mentor/MentorList/MentorList")
);
const MentorDetails = React.lazy(() =>
  import("./Pages/Mentor/MentorList/MentorDetails/MentorDetails")
);
const MentorProfile = React.lazy(() =>
  import("./Pages/Mentor/MentorProfile/MentorProfile")
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
          path="/mentor"
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
        <Route
          path="/startUpOnboarding"
          element={
            <Suspense>
              <StartUpOnboarding />
            </Suspense>
          }
        />
        <Route
          path="/startUpDetialsPage"
          element={
            <Suspense>
              <StartUpDetialsPage />
            </Suspense>
          }
        />
        <Route
          path="/projectOverview"
          element={
            <Suspense>
              <ProjectOverview />
            </Suspense>
          }
        />
        <Route
          path="/becomeMentor"
          element={
            <Suspense>
              <BecomeMentor />
            </Suspense>
          }
        />
        <Route
          path="/becomeMentorSteps"
          element={
            <Suspense>
              <BecomeMentorSteps />
            </Suspense>
          }
        />
        <Route
          path="/mentorList"
          element={
            <Suspense>
              <MentorList />
            </Suspense>
          }
        />
        <Route
          path="/mentorDetails"
          element={
            <Suspense>
              <MentorDetails />
            </Suspense>
          }
        />
        <Route
          path="/mentorProfile"
          element={
            <Suspense>
              <MentorProfile />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
