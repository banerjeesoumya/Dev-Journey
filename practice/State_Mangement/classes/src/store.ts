interface Games {
    id: string,
    whitePlaterName: string,
    blackPlayerName: string,
    moves: string[]
} 

export class GameManager {
    private games: Games[] =[];

    constructor() {
        this.games = [];
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

export const gameManager = new GameManager();