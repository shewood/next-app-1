import { Navbar } from "./navBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {
          children
      }
    </div>
  );
};
