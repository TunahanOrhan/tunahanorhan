import dynamic from "next/dynamic";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function options() {
  return {
    renderNode: {
      // Must be a <div> instead of <p> to avoid descendant issue, hence to avoid mismatching UI between server and client on hydration.
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <div className="mb-4 leading-slacker last:mb-0 [&:has(+ul)]:mb-1">
          {children}
        </div>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="list-disc space-y-2">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="mb-4 flex list-inside list-[decimal-leading-zero] flex-col gap-2">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
    },
  };
}

export const RichText = ({ content }) => {
  if (!content) return null;
  return documentToReactComponents(content.json, options());
};
