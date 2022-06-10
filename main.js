import { UserInteractions } from "./UserInteractions.js";

//Create UserInteractions object
const ui = new UserInteractions();

do {
  ui.selectMenuOption();
  ui.showOptionsBasedOnSelectedMenu();
} while (ui.getMenuOption() !== "4");
