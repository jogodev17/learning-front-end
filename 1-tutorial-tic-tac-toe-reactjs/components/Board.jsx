import React, { useEffect, useState } from "react";

function Square({ value, onSquareClick }) {
	return (
		// onClick={onSquareClick} accessing the function from the parent
		<button className="square" onClick={onSquareClick}>
			{/* {value} depends on the

				const [squares, setSqaures] = useState(Array(9).fill(null));

				output:

				const squares = [null, null, null, null, null, null, null, null, null];
			*/}
			{value}
		</button>
	);
}

function calculateWinner(squares) {
	// logic for winners
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] && // 0
			squares[a] === squares[b] && // 0 == 1
			squares[a] === squares[c] // 0 == 2
		) {
			return squares[a]; // possible winner 'X' or 'O'
		}
	}
	return null; // stays in the game if doesn't have a winner
}

const Board = () => {
	const [status, setStatus] = useState(null);
	// (!xIsNext) sets if true then false
	const [xIsNext, setXIsNext] = useState(true);
	// const squares = [null, null, null, null, null, null, null, null, null];
	const [squares, setSqaures] = useState(Array(9).fill(null));

	useEffect(() => {
		
	}, [])

	const handleClick = (i) => {
		// if the value of X(i) exist in the array, don't return anything so this is integrity of the value of 'X' & 'O' in the useState(Array(9).fill(null))
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		// copies or mutate the original state
		const nextSquares = squares.slice();

		// changing the value to X or O
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}

		const winner = calculateWinner(nextSquares);
		if (winner) {
			setStatus(`Winner: ${winner}`)
		} else {
			setStatus(`Next player: ${(xIsNext ? "X" : "O")}`)
		}

		// sets the new array to its original state
		setSqaures(nextSquares);
		// this makes the value to X or Y
		setXIsNext(!xIsNext);
	};

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square
					value={squares[0]}
					onSquareClick={() => handleClick(0)}
				/>
				{/* 
			value={squares[0]} 
			This is the first index in:
			const squares = [👉null, null, null, null, null, null, null, null, null];
			once we click this empty box:
			onSquareClick={() => handleClick(0)
			0 is the first index so it will be the X
			const squares = [👉'X', null, null, null, null, null, null, null, null];
			it change because of the:

			if (xIsNext) {
				nextSquares[i] = "X";
			} else {
				nextSquares[i] = "O";
			}

			the content base on that array

			squares[0] is 'X':

			const squares = [👉'X', null, null, null, null, null, null, null, null];

			so our value to that box is 'X'
			X - -
			- - -
			- - -
			*/}
				<Square
					value={squares[1]}
					onSquareClick={() => handleClick(1)}
				/>
				<Square
					value={squares[2]}
					onSquareClick={() => handleClick(2)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[3]}
					onSquareClick={() => handleClick(3)}
				/>
				<Square
					value={squares[4]}
					onSquareClick={() => handleClick(4)}
				/>
				<Square
					value={squares[5]}
					onSquareClick={() => handleClick(5)}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[6]}
					onSquareClick={() => handleClick(6)}
				/>
				<Square
					value={squares[7]}
					onSquareClick={() => handleClick(7)}
				/>
				<Square
					value={squares[8]}
					onSquareClick={() => handleClick(8)}
				/>
			</div>
		</>
	);
};

export default Board;
