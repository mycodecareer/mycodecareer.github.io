import React from "react";

const Layout = (props) => {
  return (
    <div className="px-8 sm:px-20 lg:px-28 lg:py-0 border-none">
      {props.children}
    </div>
  );
};

export default Layout;
