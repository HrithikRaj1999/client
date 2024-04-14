import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
// Context providers
import appRouter from "./components/Router/appRouter";
import Error from "./components/Error";

const App = () => {
  return (
    <Suspense fallback={<Error />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default App;
