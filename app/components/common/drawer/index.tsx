import { Drawer } from "@mantine/core";

type Props = {
  openned: boolean;
  toggle(state?: boolean): void;
};

const MyDrawer = (props: Props) => {
  return (
    <Drawer
      opened={props.openned}
      onClose={() => props.toggle(false)}
      title="Register"
      padding="md"
      size="md"
      aria-labelledby="drawer-title"
      aria-describedby="drawer-body"
      closeButtonLabel="Close drawer"
    >
      <h1 id="drawer-title">Title</h1>
      <div id="drawer-body">Body</div>
    </Drawer>
  );
};

export default MyDrawer;
