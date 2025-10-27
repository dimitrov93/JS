import NavBar from "@/components/Nav/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />

      {children}
    </main>
  );
};

export default Layout;
