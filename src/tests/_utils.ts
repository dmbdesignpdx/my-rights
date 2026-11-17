import { experimental_AstroContainer, type ContainerRenderOptions } from "astro/container";
import { Window } from "happy-dom";
import { type AstroComponentFactory } from "astro/runtime/server/index.js";


export async function renderAstro(
  component: AstroComponentFactory,
  options: ContainerRenderOptions,
): Promise<HTMLDivElement> {
  const container = await experimental_AstroContainer.create();
  const result = await container.renderToString(component, options);

  const div = new Window().document.createElement("div");
  div.innerHTML = result;

  return div as unknown as HTMLDivElement;
}
