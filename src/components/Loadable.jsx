import React, { Suspense } from "react";
import Loader from "./Loader";

const Loadable = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default Loadable;
