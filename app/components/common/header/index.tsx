import { Anchor, Group, Header, Title } from "@mantine/core";
import { Link } from "@remix-run/react";
import { Bell } from "tabler-icons-react";

import SearchInput from "~/components/inputs/search";
import DrawerMenu from "../drawer/menu";
import AuthButton from "./auth";

type Props = {};

const MyHeader: React.FC<Props> = (props) => {
  return (
    <Header height={56} px="xl">
      <Group position="apart" align="center" style={{ height: "100%" }}>
        <Group spacing="xl" align="center">
          <DrawerMenu />
          <Anchor component={Link} to="/" color="blue">
            <Group spacing="xs" align="center">
              <Bell size={32} />
              <Title order={4}>ZuLog</Title>
            </Group>
          </Anchor>
          <SearchInput />
        </Group>

        <AuthButton />
      </Group>
    </Header>
  );
};

export default MyHeader;
