import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-[27px] font-normal md:text-[25px] sm:text-[23px]",
  s: "text-[22px] font-normal",
  xl: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  md: "text-2xl font-normal md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
