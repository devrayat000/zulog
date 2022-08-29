import { useEffect } from "react";
import { ActionIcon, MediaQuery, useMantineTheme } from "@mantine/core";
import { useBooleanToggle, useMediaQuery } from "@mantine/hooks";
import { Menu2 } from "tabler-icons-react";

import MyDrawer from ".";

type Props = {};

const DrawerMenu = (props: Props) => {
  const [open, toggleDrawer] = useBooleanToggle(false);

  const theme = useMantineTheme();
  const isLarge = useMediaQuery(theme.fn.largerThan("md"));

  useEffect(() => {
    if (isLarge) {
      toggleDrawer(false);
    }
  }, [isLarge, toggleDrawer]);

  return (
    <>
      <MediaQuery styles={{ display: "none" }} largerThan="md">
        <ActionIcon onClick={() => toggleDrawer()}>
          <Menu2 />
        </ActionIcon>
      </MediaQuery>
      <MyDrawer openned={open} toggle={toggleDrawer} />
    </>
  );
};

export default DrawerMenu;
