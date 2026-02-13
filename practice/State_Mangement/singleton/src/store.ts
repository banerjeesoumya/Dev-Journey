interface Games {
    id: string,
    whitePlaterName: string,
    blackPlayerName: string,
    moves: string[]
} 

export class GameManager {
    private games: Games[] =[];
    private static instance: GameManager;

    private constructor() {
        this.games = [];
    }

    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }

    public addGame(gameId: string) {
        const game = {
            id: gameId,
            whitePlaterName: "Alice",
            blackPlayerName: "Bob",
            moves: []
        };
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    };
    
    public addMove(gameId: string, move: string) {
        const game = this.games.find((g) => g.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }

    public logState() {
        console.log(this.games);
    }
}

export const gameManager = GameManager.getInstance();