import { Avatar, Container, Paper, Title } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { GetUserQuery } from "~/graphql/generated";
import apiServer from "~/services/api.server";

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.user;
  if (!id) throw new Error("No user found!");

  const data = await apiServer.GetUser({ id });

  if (!data.user) throw new Error("User not found!");
  return data.user;
};

type User = Exclude<GetUserQuery["user"], null>;

export default function UserDetailsPage() {
  const user = useLoaderData<User>();

  return (
    <Container>
      <Paper p="xl" withBorder radius="md">
        {user.picture ? (
          <Avatar
            radius="xl"
            src={user.picture}
            alt={user.name}
            key={user.name}
          />
        ) : (
          <Avatar color="cyan" radius="xl">
            {user.name?.at(0)}
          </Avatar>
        )}
        <Title order={1}>{user.name}</Title>
      </Paper>
    </Container>
  );
}
