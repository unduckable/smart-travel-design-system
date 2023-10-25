import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
import { Link, Route, useLocation } from "wouter";

import "../src/styles/index.css";

const ROUTES = [
  { label: "Home", route: "/", component: lazy(() => import("./home")) },
  { label: "Button", route: "/button", component: lazy(() => import("./components/button")) },
];

function App() {
  const [location] = useLocation();

  return (
    <>
      <nav className="nav-bar">
        {ROUTES.map((r, index) => (
          <Link href={r.route} key={index}>
            <span className={location === r.route ? "active" : ""}>{r.label}</span>
          </Link>
        ))}
      </nav>

      {ROUTES.map((r, index) => {
        // biome-ignore lint: workaround to bypass ts errors
        const Component = r.component as any;
        // biome-ignore lint: workaround to bypass ts errors
        const S = Suspense as any;

        return (
          <Route key={index} path={r.route}>
            <S fallback={<div>loading...</div>}>
              <Component />
            </S>
          </Route>
        );
      })}
    </>
  );
}

render(<App />, document.querySelector("#root"));
