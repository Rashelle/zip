function renderPositionSnippets(jobPositions) {
  const favoritePositionsMap = getFavoritePositionsMap();

  Object.keys(jobPositions).forEach(positionId => {
    const isFavorite = favoritePositionsMap[positionId];
    generatePositionSnippet(positionId, {
      ...jobPositions[positionId],
      isFavorite
    });
  });
}

function onFavoriteBtnClick(positionBox, positionId) {
  const isFavorite = toggleFavoritePosition(positionId);

  if (isFavorite) {
    positionBox.classList.add("favorite");
  } else {
    positionBox.classList.remove("favorite");
  }
}

function generatePositionSnippet(positionId, positionData) {
  const positionBox = document.createElement("div");
  positionBox.classList.add("position-snippet");

  if (isEmpty(positionBox)) {
    return;
  }

  appendContent(positionBox, "button", {
    elmClass: ["position-fav-btn", positionData.isFavorite && "favorite"],
    eventListener: {
      eventName: "click",
      eventHandler: e => {
        onFavoriteBtnClick(e.target, positionId);
      }
    }
  });
  appendContent(positionBox, "img", {
    elmContent: positionData.logo,
    elmClass: "position-logo"
  });
  appendContent(positionBox, "a", {
    elmContent: positionData.name,
    elmClass: "position-name",
    eventListener: {
      eventName: "click",
      eventHandler: () => turnOverlayOn(positionBox)
    }
  });
  appendContent(positionBox, "a", {
    elmContent: positionData.company,
    elmClass: "position-company"
  });
  appendContent(positionBox, "a", {
    elmContent: positionData.location,
    elmClass: "position-location"
  });

  const payStr = `Pay $${positionData.minPay} - $${positionData.maxPay}`;
  appendContent(positionBox, "div", {
    elmContent: payStr,
    elmClass: "position-pay"
  });

  const benefitsStr = `Benefits ${positionData.benefits}`;
  appendContent(positionBox, "div", {
    elmContent: benefitsStr,
    elmClass: "position-benefits"
  });

  const typeStr = `Type ${positionData.type}`;
  appendContent(positionBox, "div", {
    elmContent: typeStr,
    elmClass: "position-type"
  });

  appendContent(positionBox, "div", {
    elmContent: positionData.note,
    elmClass: "position-note"
  });

  appendContent(positionBox, "div", {
    elmContent: positionData.description,
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

  if (elmClass) {
    const elmClasses = typeof elmClass == "string" ? [elmClass] : elmClass;
    el.classList.add(...elmClasses);
  }

  if (elmContent) {
    const content = document.createTextNode(elmContent);

    if (elmType == "img") {
      el.setAttribute("src", elmContent);
    } else {
      el.appendChild(content);
    }
  }

  if (eventListener) {
    const { eventName, eventHandler } = eventListener;
    el.addEventListener(eventName, eventHandler);
  }

  parentElm.appendChild(el);
}
