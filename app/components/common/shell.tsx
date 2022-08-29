import { AppShell } from "@mantine/core";

// import MyDrawer from "./drawer";
import MyHeader from "./header";
// import MyNavbar from "./navbar";

type Props = {
  children: React.ReactNode;
  Navbar?: React.FC<{}>;
  Aside?: React.FC<{}>;
  Footer?: React.FC<{}>;
};

const MyAppShell: React.FC<Props> = ({ children, Aside, Footer, Navbar }) => {
  return (
    <AppShell
      header={<MyHeader />}
      navbar={Navbar && <Navbar />}
      navbarOffsetBreakpoint="md"
      aside={Aside && <Aside />}
      footer={Footer && <Footer />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
};

// MyAppShell.defaultProps = {
//   Navbar: MyNavbar,
// };

export default MyAppShell;
