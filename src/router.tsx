import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { createBrowserRouter, json, redirect } from "react-router-dom";

import Home from "./routes/home";
import Root from "./routes/root";
import TutorialShow from "./routes/tutorials-show";
import TutorialsList from "./routes/tutorials-list";
import ErrorPage from "./routes/error-page";
import initialize from "./firebase/initialize";
import Login from "./routes/login";
import getTutorial from "./queries/getTutorial";
import getTutorials from "./queries/getTutorials";
import finishTutorial from "./mutations/finishTutorial";
import resetTutorial from "./mutations/resetTutorial";
import SignIn from "./routes/signin";

const app = initialize();
export const firestore = getFirestore(app);
export const auth = getAuth(app);

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const tutorials = await getTutorials(4);
          return json({ tutorials });
        },
        errorElement: <ErrorPage />,
      },
      {
        path: "/tutorials",
        element: <TutorialsList />,
        loader: async () => {
          const tutorials = await getTutorials();
          return json({ tutorials });
        },
        errorElement: <ErrorPage />,
      },
      {
        path: "/tutorials/:id",
        element: <TutorialShow />,
        loader: async ({ params }) => {
          if (!params.id) {
            throw redirect("/tutorials");
          }
          const tutorial = await getTutorial(params.id);
          if (!tutorial) {
            throw new Response("", {
              status: 404,
              statusText: "Page introuvable",
            });
          }
          return json({ tutorial });
        },
        errorElement: <ErrorPage />,
      },
      {
        path: "/tutorials/:id/reset",
        action: async ({ params }) => {
          if (!params.id) {
            throw redirect("/tutorials");
          }
          await resetTutorial(params.id);
          return json({});
        },
      },
      {
        path: "/tutorials/:id/finish",
        action: async ({ params }) => {
          if (!params.id) {
            throw redirect("/tutorials");
          }
          await finishTutorial(params.id);
          return json({});
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logout",
    action: async ({ request }) => {
      await signOut(auth);
      const formData = await request.formData();
      const from = formData.get("from") as string;
      return redirect(from);
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
