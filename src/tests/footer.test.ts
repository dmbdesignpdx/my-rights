// Theirs
import {
  describe,
  expect,
  test,
} from "vitest";
import { getByRole } from "@testing-library/dom";

// Ours
import { renderAstro } from "./_utils";
import { Language } from "@/constants/lang";
import { getTranslations } from "@/i18n";
import Footer, { type Props } from "../components/footer.astro";


const content = getTranslations(Language.EN).footer;
const props: Props = {
  content,
};

describe("Footer", () => {
  test("renders its default content", async () => {
    const root = await renderAstro(Footer, {
      props: { ...props },
    });

    const repoLink = getByRole(root, "link", { name: content.repo.link });

    expect(root).not.toBeNull();
    expect(root).toHaveTextContent(content.copy);
    expect(root).toHaveTextContent(content.disclaimer);
    expect(root).toHaveTextContent(content.repo.text);
    expect(repoLink).toHaveAttribute("href", content.repo.link);

    content.links.forEach((link) => {
      const a = getByRole(root, "link", { name: link.label });

      expect(a).toHaveAttribute("href", link.href);
      expect(a).toHaveAttribute("target", "_blank");
      expect(a).toHaveAttribute("rel", "noreferrer noopener");
    });
  });
});
