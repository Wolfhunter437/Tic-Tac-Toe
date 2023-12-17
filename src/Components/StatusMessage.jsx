export default function StatusMessage({winner, gamingBoard}) {

    const {squares, isXNext} = gamingBoard; 
    const noMovesLeft = squares.every(squareValue => squareValue !== null);
    const nextPlayer = isXNext ? <span className="text-green">X</span> : <span className="text-orange">O</span>;

    const renderStatusMessage = () => {
        if(winner){
            return <div>Winner is {winner}</div>;
        }

        if(!winner && noMovesLeft){
            return <div>It is a draw you brainless noobs</div>;
        }

        if(!winner && !noMovesLeft){
            return <div>It is {nextPlayer}'s turn</div>;
        }

        return null;
    }

    return (
        <div className="status-message">
            {renderStatusMessage()}
        </div>
    )
}
