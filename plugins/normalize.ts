import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

export default function normalizeHeadingIds() {
  // @ts-expect-error - Node module export
  return function (tree) {
    slugger.reset();

    visit(tree, "heading", (node) => {
      const text = node.children
        // @ts-expect-error - Node type
        .filter((c) => c.type === "text")
        // @ts-expect-error - Node type
        .map((c) => c.value)
        .join(" ");

      const ascii = text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const slug = slugger.slug(ascii);

      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.id = slug;
      node.data.hProperties.id = slug;
    });
  };
}
