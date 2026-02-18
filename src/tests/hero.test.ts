// Theirs
import {
  describe,
  expect,
  test,
} from "vitest";

// Ours
import { renderAstro } from "./_utils";
import Hero, { type Props } from "../components/hero.astro";


const props: Props = {
  heading: "hello world",
  subheading: "the answer is 42",
};

describe("Hero", () => {
  test("renders its default content", async () => {
    const root = await renderAstro(Hero, {
      props: { ...props },
    });

    expect(root).not.toBeNull();
    expect(root).toHaveTextContent(props.heading);
    expect(root).toHaveTextContent(props.subheading);
  });
});
