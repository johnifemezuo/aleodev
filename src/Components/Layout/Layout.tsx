import { Footer } from "../UI/Footer/Footer";
import Nav from "../UI/Navbar/Nav";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
