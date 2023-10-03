export default function querySelectorAll(selector: string) {
  const [parentSelector, childSelector] = selector.split("<");

  if (childSelector === null) return document.querySelectorAll(parentSelector);

  let parents = document.querySelectorAll(parentSelector);

  parents.forEach((parent) => {
    const children = [
      ...parent.querySelectorAll(`${parentSelector} > ${childSelector}`),
    ];
    if (
      children.some((child) => {
        return child.closest(parentSelector) === parent;
      })
    ) {
      parent.dataset.selectedNewQuerySelectorAll = "";
    }
  });
  const output = document.querySelectorAll(
    "[data-selected-new-query-selector-all]"
  );

  output.forEach((el) => {
    delete el.dataset["selectedNewQuerySelectorAll"];
  });
  return output;
}
