import whitePawn from "./assets/chess/wp.png";
import blackPawn from "./assets/chess/bp.png";
import whiteKnight from "./assets/chess/wn.png";
import blackKnight from "./assets/chess/bn.png";
import whiteBishop from "./assets/chess/wb.png";
import blackBishop from "./assets/chess/bb.png";
import whiteRook from "./assets/chess/wr.png";
import blackRook from "./assets/chess/br.png";
import whiteQueen from "./assets/chess/wq.png";
import blackQueen from "./assets/chess/bq.png";
import whiteKing from "./assets/chess/wk.png";
import blackKing from "./assets/chess/bk.png";
import { useState } from "react";

type Piece = {
    type: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
    color: "white" | "black";
}

type Board = (Piece | null) [][];

function Chess() {
    const pieceImages: Record<string, string> = {
        "white_pawn": whitePawn,
        "black_pawn": blackPawn,
        "white_knight": whiteKnight,
        "black_knight": blackKnight,
        "white_bishop": whiteBishop,
        "black_bishop": blackBishop,
        "white_rook": whiteRook,
        "black_rook": blackRook,
        "white_queen": whiteQueen,
        "black_queen": blackQueen,
        "white_king": whiteKing,
        "black_king": blackKing,
    };
    
    function createBoard(): Board {
        const emptyRow = () => Array(8).fill(null);
    
        return [
            [
                { type: "rook", color: "black" },
                { type: "knight", color: "black" },
                { type: "bishop", color: "black" },
                { type: "queen", color: "black" },
                { type: "king", color: "black" },
                { type: "bishop", color: "black" },
                { type: "knight", color: "black" },
                { type: "rook", color: "black" }
            ],
            Array.from({ length: 8 }, () => ({
                type: "pawn",
                color: "black"
            })),
            emptyRow(),
            emptyRow(),
            emptyRow(),
            emptyRow(),
            Array.from({ length: 8 }, () => ({
                type: "pawn",
                color: "white"
            })),
            [
                { type: "rook", color: "white" },
                { type: "knight", color: "white" },
                { type: "bishop", color: "white" },
                { type: "queen", color: "white" },
                { type: "king", color: "white" },
                { type: "bishop", color: "white" },
                { type: "knight", color: "white" },
                { type: "rook", color: "white" }
            ]
        ];
    }

    const [board, setBoard] = useState<Board>(createBoard());
    const [selected, setSelected] = useState<[number, number] | null>(null)

    function move(i: number, j: number) {
        if (!selected) {
            // select a piece
            if (board[i][j]) {
                setSelected([i, j]);
            }
            return;
        }
    
        const [si, sj] = selected;
    
        const newBoard = board.map(row => [...row]);
    
        // move piece
        newBoard[i][j] = newBoard[si][sj];
        newBoard[si][sj] = null;
    
        setBoard(newBoard);
        setSelected(null);
    }

    return (

        <div style={{padding: "10px"}}>

            {board.map((row, i) => (
                <div key={i} style={{ display: "flex" }}>
                    {row.map((cell, j) => {
                        const key = cell ? `${cell.color}_${cell.type}` : null;

                        return (
                        <div
                            onClick={() => move(i , j)}
                            key={j}
                            style={{
                                width: 80,
                                height: 80,
                                backgroundColor: (i + j) % 2 === 0 ? "#EEEED2" : "#4A7396",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative"
                            }}
                        >
                            
                            {cell && (
                                <img
                                    src={pieceImages[key!]}
                                    style={{ 
                                        width: 80, 
                                        height: 80,
                                        position: "absolute",
                                        cursor: "grab" }}
                                />
                            )}
                        </div>
                        )
                    })}
                </div>
            ))}
            
        </div>
    )
}

export default Chess