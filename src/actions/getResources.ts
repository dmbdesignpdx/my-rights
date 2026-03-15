export interface Resource {
  name: string;
  link: string;
  tags: string;
}

export type ResourceState = Resource[];


export async function getResources(
  state: ResourceState,
  formData: FormData,
): Promise<ResourceState> {
  const value = formData.get("search")?.toString() || "";

  if (!value) return state;

  const [city, st] = value.split(",");
  const res = await fetch(`/api/resources?city=${city}&state=${st.trim()}`);
  const data = await res.json() as ResourceState;

  return data.sort((a, b) => a.name.localeCompare(b.name));
}
