function getFavoritePositionsMap() {
  const favoritePositionsStr = localStorage.getItem("favoritePositions");
  return favoritePositionsStr ? JSON.parse(favoritePositionsStr) : {};
}

function toggleFavoritePosition(positionId) {
  const favoritePositionsMap = getFavoritePositionsMap();
  favoritePositionsMap[positionId] = !favoritePositionsMap[positionId];

  localStorage.setItem(
    "favoritePositions",
    JSON.stringify(favoritePositionsMap)
  );

  return favoritePositionsMap[positionId];
}
