import React, { useState, createContext, lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  Menu,
  ColorSelector,
  PhotoDetail,
  NotFound,
  ProtectedRoute,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Login } from "./features/auth/Login";
import { BrowserRouter } from "./app/BrowserRouter";
import { history } from "./app/history";

//Code Split
const TodoList = lazy(() => import("./components/TodoList"));
const PostList = lazy(() => import("./components/PostList"));
const PhotoList = lazy(() => import("./components/PhotoList"));
const Counter = lazy(() => import("./features/counter/Counter"));

export const ColorContext = createContext([]);

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <div className="container">
      <Provider store={store}>
        <ColorContext.Provider value={[color, setColor] as any}>
          <BrowserRouter history={history}>
            <Menu />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <button onClick={() => setToggle(!toggle)}>Toggle</button>
                    {toggle && <h2>Toggle header!</h2>}
                  </>
                }
              ></Route>
              <Route path="/color" element={<ColorSelector />} />
              <Route
                path="/counter"
                element={
                  <Suspense fallback={<>Loding...</>}>
                    <Counter />
                  </Suspense>
                }
              />
              <Route
                path="/todo"
                element={
                  <Suspense fallback={<>Loding...</>}>
                    <TodoList />
                  </Suspense>
                }
              />
              <Route
                path="/posts"
                element={
                  <Suspense fallback={<>Loding...</>}>
                    <PostList />
                  </Suspense>
                }
              />
              <Route
                path="/photos"
                element={
                  <Suspense fallback={<>Loding...</>}>
                    <PhotoList />
                  </Suspense>
                }
              />
              <Route path="/photos/:id" element={<PhotoDetail />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ColorContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
