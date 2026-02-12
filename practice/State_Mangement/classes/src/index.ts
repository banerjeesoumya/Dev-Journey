import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(() => {
    gameManager.addGame(`game-${Math.random().toString(36).substr(2, 5)}`);
}, 5000)