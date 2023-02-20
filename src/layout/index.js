import Header from "../components/Header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />

      <div className="layout_content"> {children}</div>
    </div>
  );
}

export default Layout;
