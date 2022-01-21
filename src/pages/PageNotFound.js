import React from 'react';
import { useLocation } from "react-router-dom";

function PageNotFound() {
  let location = useLocation();
    return (
        <div>
          <h1>Page not found at {location.pathname}!</h1>
        </div>
    );
}

export default PageNotFound
