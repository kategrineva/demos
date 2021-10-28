export default function create(el, classNames, child, parent, ...dataAttr) {
  const element = document.createElement(el);

  // add class
  if (classNames) element.className = classNames;

  // add sub elements to element
  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (typeof child === 'string') {
    element.innerHTML = child;
  }

  // wrap element
  if (parent) parent.appendChild(element);

  // add attributs to element
  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (attrValue) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }

  return element;
}
