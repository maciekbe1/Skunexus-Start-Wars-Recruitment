import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = lazy(() => import("../components/App"));
const Details = lazy(() => import("../components/Details"));
const NotFoundPage = lazy(() => import("../components/NotFoundPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Page loading...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
