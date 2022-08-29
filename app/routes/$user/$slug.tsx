import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  Anchor,
  Avatar,
  Box,
  Container,
  Group,
  Image,
  Paper,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";

import type { GetPostBySlugQuery } from "~/graphql/generated";
import apiServer from "~/services/api.server";

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug;
  if (!slug) throw new Error("No slug found!");

  const data = await apiServer.GetPostBySlug({ slug });

  if (!data.post) throw new Error(`No post found for (${slug})!`);
  return data.post;
};

type Post = Exclude<GetPostBySlugQuery["post"], null>;

export default function PostDetailsPage() {
  const post = useLoaderData<Post>();

  return (
    <Container>
      <Paper p="xl" withBorder radius="md">
        {post.featuredImage.url && (
          <Image
            key={post.featuredImage.id}
            src={post.featuredImage.url}
            alt={post.author?.name!}
          />
        )}
        <Anchor component={Link} to={`/${post.author?.id}`} variant="text">
          <Group spacing="sm">
            {post.author?.picture ? (
              <Avatar
                radius="xl"
                src={post.author?.picture}
                alt={post.author?.name!}
                key={post.author.name}
              />
            ) : (
              <Avatar color="cyan" radius="xl">
                {post.author?.name?.at(0)}
              </Avatar>
            )}
            <Box>
              <Title order={5}>{post.author?.name}</Title>
              <Text component="p" my={0}>{`Posted on ${dayjs(
                post.publishedAt
              ).format("MMM DD")}`}</Text>
            </Box>
          </Group>
        </Anchor>

        <Title order={1}>{post.title}</Title>

        {post.content.json && (
          <TypographyStylesProvider>
            <RichText content={post.content.json} />
          </TypographyStylesProvider>
        )}
      </Paper>
    </Container>
  );
}
