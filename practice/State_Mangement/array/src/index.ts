import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(36).substring(7),
        whitePlayerName: "ALice",
        blackPlayerName: "Bob",
        moves: []
    })
}, 5000);