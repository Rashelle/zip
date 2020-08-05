function renderPositionSnippets(jobPositions) {
  const positions = Object.values(jobPositions);
  return positions.forEach(position => generatePositionSnippet(position));
}

function generatePositionSnippet(position) {
  const positionBox = document.createElement("div");
  positionBox.classList.add("position-snippet");

  if (isEmpty(positionBox)) {
    return;
  }

  appendContent(positionBox, "img", position.logo, "position-logo");
  appendContent(positionBox, "a", position.name, "position-name");
  appendContent(positionBox, "a", position.company, "position-company");
  appendContent(positionBox, "a", position.location, "position-location");

  const payStr = `Pay $${position.minPay} - $${position.maxPay}`;
  appendContent(positionBox, "div", payStr, "position-pay");

  const benefitsStr = `Benefits ${position.benefits}`;
  appendContent(positionBox, "div", benefitsStr, "position-benefits");

  const typeStr = `Type ${position.type}`;
  appendContent(positionBox, "div", typeStr, "position-type");

  appendContent(positionBox, "div", position.note);
  appendContent(
    positionBox,
    "div",
    position.description,
    "position-description"
  );

  const positionsSection = document.getElementById("position-snippets-section");
  return positionsSection.appendChild(positionBox);
}

function appendContent(parentElm, newElmType, newElmContent, elmClass) {
  if (isEmpty(parentElm) || isEmpty(newElmType)) {
    return;
  }

  const el = document.createElement(newElmType);
  if (newElmType == "img") el.setAttribute("src", newElmContent);
  !!elmClass && el.classList.add(elmClass);
  const content = document.createTextNode(newElmContent);
  if (newElmType != "img") el.appendChild(content);
  parentElm.appendChild(el);
}
