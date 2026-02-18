import { experimental_AstroContainer, type ContainerRenderOptions } from "astro/container";
import { type AstroComponentFactory } from "astro/runtime/server/index.js";


export async function renderAstro(
  component: AstroComponentFactory,
  options: ContainerRenderOptions,
): Promise<HTMLDivElement> {
  const container = await experimental_AstroContainer.create();
  const result = await container.renderToString(component, options);

  const div = document.createElement("div");
  div.innerHTML = result;

  return div;
}
