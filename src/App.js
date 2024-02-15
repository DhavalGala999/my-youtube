import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import SearchResults from "./components/SearchResults";
import ButtonList from "./components/ButtonList";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Head />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/search",
          element: (
            <>
              <ButtonList />
              <SearchResults />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="dark:bg-black dark:text-white">
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          {/* <Head />
          <Body /> */}
          {/**
           * Head
           * Body
           *    Sidebar
           *        MenuItems
           *    MainContainer
           *        ButtonList
           *        VideoContainer
           *            VideoCard
           *                Watch
           *                  LiveChat
           *                  Comments
           */}
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
