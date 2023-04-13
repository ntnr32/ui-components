import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import { Suspense } from "react";
import { Loading } from "./components";

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
