const onClick = () => {
  const homeElement = document.getElementById("home");
  const mapElement = document.getElementById("map");

  const displayStyleOfHomeElement = getComputedStyle(homeElement).display;
  const displayStyleOfMapElement = getComputedStyle(mapElement).display;

  console.log("Display style of home: ", displayStyleOfHomeElement);
  console.log("Display style of map: ", displayStyleOfMapElement);

  if (displayStyleOfHomeElement === "none") {
    homeElement.style.display = "flex";
    mapElement.style.display = "none";
  } else if (displayStyleOfMapElement === "none") {
    mapElement.style.display = "flex";
    homeElement.style.display = "none";
  } else {
    throw new Error("unexpected situation");
  }
};

const switchButton = document.getElementById("switch-button");
switchButton.addEventListener("click", onClick);
