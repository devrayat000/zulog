import { Button, Group, MediaQuery } from "@mantine/core";
import { Link } from "@remix-run/react";

type Props = {};

const AuthButton = (props: Props) => {
  return (
    <Group spacing="md" align="center">
      <MediaQuery styles={{ display: "none" }} smallerThan="md">
        <Button component={Link} variant="subtle" to="/login">
          Login
        </Button>
      </MediaQuery>
      <Button component={Link} variant="outline" to="/register">
        Create account
      </Button>
    </Group>
  );
};

export default AuthButton;
