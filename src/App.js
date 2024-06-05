import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Axios from "axios";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageLoader from "./Components/PageLoader/PageLoader";
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
const ServiceList = React.lazy(() =>
  import("./Pages/ServiceProvider/ServiceList/ServiceList")
);
const ServiceDetials = React.lazy(() =>
  import("./Pages/ServiceProvider/ServiceDetails/ServiceDetails")
);
const ServiceProfile = React.lazy(() =>
  import("./Pages/ServiceProvider/ServiceProfile/ServiceProfile")
);
const Message = React.lazy(() => import("./Pages/Message/Message"));
const Blog = React.lazy(() => import("./Pages/Blog/Blog"));
const BlogDetails = React.lazy(() =>
  import("./Pages/Blog/BlogDetails/BlogDetails")
);
const AddBlog = React.lazy(() => import("./Pages/Blog/AddBlog/AddBlog"));

Axios.defaults.baseURL = "https://seedboat.qortechno.com";
// Axios.defaults.withCredentials = true;
Axios.defaults.headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": Axios.defaults.baseURL,
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<PageLoader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/userRole"
          element={
            <Suspense fallback={<PageLoader />}>
              <UserRole />
            </Suspense>
          }
        />
        <Route
          path="/investor"
          element={
            <Suspense fallback={<PageLoader />}>
              <Investor />
            </Suspense>
          }
        />
        <Route
          path="/serviceProvider"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceProvider />
            </Suspense>
          }
        />
        <Route
          path="/mentor"
          element={
            <Suspense fallback={<PageLoader />}>
              <Founder />
            </Suspense>
          }
        />
        <Route
          path="/startUp"
          element={
            <Suspense fallback={<PageLoader />}>
              <StartUp />
            </Suspense>
          }
        />
        <Route
          path="/investorAcknowledgMent"
          element={
            <Suspense fallback={<PageLoader />}>
              <InvestorAcknowledgMent />
            </Suspense>
          }
        />
        <Route
          path="/investmentExploer"
          element={
            <Suspense fallback={<PageLoader />}>
              <InvestmentExplore />
            </Suspense>
          }
        />
        <Route
          path="/investorProfile"
          element={
            <Suspense fallback={<PageLoader />}>
              <InvestorProfile />
            </Suspense>
          }
        />
        <Route
          path="/startUpOnboarding"
          element={
            <Suspense fallback={<PageLoader />}>
              <StartUpOnboarding />
            </Suspense>
          }
        />
        <Route
          path="/startUpDetialsPage"
          element={
            <Suspense fallback={<PageLoader />}>
              <StartUpDetialsPage />
            </Suspense>
          }
        />
        <Route
          path="/projectOverview"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProjectOverview />
            </Suspense>
          }
        />
        <Route
          path="/becomeMentor"
          element={
            <Suspense fallback={<PageLoader />}>
              <BecomeMentor />
            </Suspense>
          }
        />
        <Route
          path="/becomeMentorSteps"
          element={
            <Suspense fallback={<PageLoader />}>
              <BecomeMentorSteps />
            </Suspense>
          }
        />
        <Route
          path="/mentorList"
          element={
            <Suspense fallback={<PageLoader />}>
              <MentorList />
            </Suspense>
          }
        />
        <Route
          path="/mentorDetails"
          element={
            <Suspense fallback={<PageLoader />}>
              <MentorDetails />
            </Suspense>
          }
        />
        <Route
          path="/mentorProfile"
          element={
            <Suspense fallback={<PageLoader />}>
              <MentorProfile />
            </Suspense>
          }
        />
        <Route
          path="/serviceList"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceList />
            </Suspense>
          }
        />
        <Route
          path="/serviceDetials"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceDetials />
            </Suspense>
          }
        />
        <Route
          path="/serviceProfile"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceProfile />
            </Suspense>
          }
        />
        <Route
          path="/message"
          element={
            <Suspense fallback={<PageLoader />}>
              <Message />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<PageLoader />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blogDetails"
          element={
            <Suspense fallback={<PageLoader />}>
              <BlogDetails />
            </Suspense>
          }
        />
        <Route
          path="/addBlog"
          element={
            <Suspense fallback={<PageLoader />}>
              <AddBlog />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
