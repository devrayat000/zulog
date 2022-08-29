// import Image from "next/image";
import { Code, Image } from "@mantine/core";
import { NodeRendererType } from "@graphcms/rich-text-react-renderer";

export const components: NodeRendererType = {
  img({ altText, src, handle, mimeType, ...props }) {
    // @ts-ignore
    return (
      <Image
        alt={altText}
        src={src!}
        // layout="responsive"
        // itemType={mimeType}
        {...props}
        // @eslint:ignore
        // children={undefined}
      />
    );
  },
  code({ children }) {
    return <Code>{children}</Code>;
  },
};
