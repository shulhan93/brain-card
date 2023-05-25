export const createElement = (tag, attr) => {
  const element = document.createElement(tag);
  console.log(element)

  return Object.assign(element, attr)
}