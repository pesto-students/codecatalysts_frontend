import Wrapper from "./Wrapper";
import { LoginPage, SignUpPage } from "./LandingPage";
import App from "../App";
import InterviewStart from "./InterviewStart";
import InterviewQuestions from "./InterviewQuestions";
import InterviewHistory from "./InterviewHistory";
import InterviewResult from "./InterviewResult";
import InterviewScreen from "./InterviewScreen";
import UserProfile from "./UserProfile";
import PasswordChange from "./PasswordChange";

import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const WrapperComponent = ({
  Component,
  redirectPath = "/login",
  isReview = false,
  ...props
}) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return (
    <Wrapper>
      <Component isReview={isReview} {...props} />
    </Wrapper>
  );
};

const Routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/start",
    element: <WrapperComponent Component={InterviewStart} />,
  },
  {
    path: "/questions",
    element: <WrapperComponent Component={InterviewQuestions} />,
  },
  {
    path: "/history",
    element: <WrapperComponent Component={InterviewHistory} />,
  },
  {
    path: "/result/:id",
    element: <WrapperComponent Component={InterviewResult} />,
  },
  {
    path: "/interview/:id",
    element: <WrapperComponent Component={InterviewScreen} />,
  },
  {
    path: "/review/:id",
    element: <WrapperComponent Component={InterviewScreen} isReview={true} />,
  },
  {
    path: "/user",
    element: <WrapperComponent Component={UserProfile} />,
  },
  {
    path: "/reset",
    element: <WrapperComponent Component={PasswordChange} />,
  },
];

export default Routes;
