import React from "react";

const sizes = {
  s: "text-6xl font-semibold md:text-[52px] sm:text-[46px]",
  xs: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
