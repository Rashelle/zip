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

  appendContent(positionBox, "img", {
    elmContent: position.logo,
    elmClass: "position-logo"
  });
  appendContent(positionBox, "a", {
    elmContent: position.name,
    elmClass: "position-name",
    eventListener: { eventName: "click", eventHandler: () => turnOverlayOn() }
  });
  appendContent(positionBox, "a", {
    elmContent: position.company,
    elmClass: "position-company"
  });
  appendContent(positionBox, "a", {
    elmContent: position.location,
    elmClass: "position-location"
  });

  const payStr = `Pay $${position.minPay} - $${position.maxPay}`;
  appendContent(positionBox, "div", {
    elmContent: payStr,
    elmClass: "position-pay"
  });

  const benefitsStr = `Benefits ${position.benefits}`;
  appendContent(positionBox, "div", {
    elmContent: benefitsStr,
    elmClass: "position-benefits"
  });

  const typeStr = `Type ${position.type}`;
  appendContent(positionBox, "div", {
    elmContent: typeStr,
    elmClass: "position-type"
  });

  appendContent(positionBox, "div", {
    elmContent: position.note,
    elmClass: "position-note"
  });

  appendContent(positionBox, "div", {
    elmContent: position.description,
    elmClass: "position-description"
  });

  const positionsSection = document.getElementById("position-snippets-section");
  return positionsSection.appendChild(positionBox);
}

function appendContent(parentElm, elmType, options = {}) {
  const { elmContent, elmClass, eventListener } = options;

  if (isEmpty(parentElm) || isEmpty(elmType)) {
    return;
  }

  const el = document.createElement(elmType);
  if (elmType == "img") el.setAttribute("src", elmContent);
  !!elmClass && el.classList.add(elmClass);
  const content = document.createTextNode(elmContent);
  if (elmType != "img") el.appendChild(content);

  if (eventListener) {
    const { eventName, eventHandler } = eventListener;
    el.addEventListener(eventName, eventHandler);
  }

  parentElm.appendChild(el);
}
