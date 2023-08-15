export default function querySelectorAll(selector: string) {
  const [parentSelector, childSelector] = selector.split("<");

  if (!childSelector) return document.querySelectorAll(parentSelector);

  let parents = document.querySelectorAll(parentSelector);

  for (const parent of parents) {
    const children = parent.querySelectorAll(
      `${parentSelector} > ${childSelector}`
    );

    for (const child of children) {
      if (child.parentElement) child.parentElement.dataset.selected = "true";
    }
  }

  const output = document.querySelectorAll("[data-selected]");

  return output;
}
