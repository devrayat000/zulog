import { Navbar, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type Props = {};

const MyNavbar = (props: Props) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(theme.fn.smallerThan("md"));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="md"
      hidden={!isMobile}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section component="section">
        <Title order={2}>ZuLog Community</Title>
      </Navbar.Section>
      <Text>Application navbar</Text>
    </Navbar>
  );
};

export default MyNavbar;
