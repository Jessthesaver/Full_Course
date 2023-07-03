export default function querySelectorAll(selector: string) {
  const [parentSelector, childSelector] = selector.split("<");

  if (!childSelector) return document.querySelectorAll(parentSelector);

  let parents = document.querySelectorAll(parentSelector);

  for (const parent of parents) {
    const children = parent.querySelectorAll(childSelector);

    for (const child of children) {
      if (child === null || child.parentElement === null) {
        break;
      }

      child.parentElement.dataset.selected = "true" as string;
    }
  }

  const output = document.querySelectorAll("[data-selected]");

  return output;
}
