import { GameLoop } from './gameLoop.js';

// Create a new instance of the GameLoop
const gameLoop = new GameLoop();

// Example: Start the game loop
gameLoop.start();

// You can use the gameLoop instance to control the game loop.
// Define a dictionary to specify the cost increase for each box
// Define a dictionary to specify the cost increase for each box
const costIncreases = {
  upgradeBox1: 10,
  upgradeBox2: 15
};

// Function to increase the cost for an upgrade box
function increaseCost(boxElement, costIncrease) {
  const costElement = boxElement.querySelector('.cost');
  let cost = parseFloat(costElement.textContent.replace('$', ''));

  return function () {
    cost += costIncrease;
    costElement.textContent = `$${cost}`;
  };
}

// Get the container element for upgrade boxes
const upgradesContainer = document.querySelector('.upgrades-container');

// Get all the upgrade box elements within the container
const upgradeBoxes = upgradesContainer.querySelectorAll('.upgrades');

// Add event listeners to all upgrade boxes
upgradeBoxes.forEach(box => {
  const boxId = box.id;
  const boxCostIncrease = costIncreases[boxId] || 0; // Default to 0 if not found in the dictionary
  const costIncrementFunction = increaseCost(box, boxCostIncrease);
  box.addEventListener('click', costIncrementFunction);
});
