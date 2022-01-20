function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = "FUNCIONOU!!";

  element.className = "vermelho";

  return element;
}

document.body.appendChild(component());