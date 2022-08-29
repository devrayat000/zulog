import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  MediaQuery,
} from "@mantine/core";
import { Search, ArrowRight, ArrowLeft } from "tabler-icons-react";

function SearchInput(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <>
      <MediaQuery styles={{ display: "none" }} smallerThan="md">
        <TextInput
          icon={<Search size={18} />}
          radius="md"
          size="md"
          sx={{ width: 400 }}
          rightSection={
            <ActionIcon
              size={32}
              radius="sm"
              color={theme.primaryColor}
              variant="filled"
            >
              {theme.dir === "ltr" ? (
                <ArrowRight size={18} />
              ) : (
                <ArrowLeft size={18} />
              )}
            </ActionIcon>
          }
          placeholder="Search..."
          rightSectionWidth={42}
          {...props}
        />
      </MediaQuery>
    </>
  );
}

export default SearchInput;
