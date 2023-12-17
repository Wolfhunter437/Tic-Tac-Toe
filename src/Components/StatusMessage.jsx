export default function StatusMessage({winner, gamingBoard}) {

    const {squares, isXNext} = gamingBoard; 
    const noMovesLeft = squares.every(squareValue => squareValue !== null);
    const nextPlayer = isXNext ? <span style={{color: 'red'}}>X</span> : <span style={{color: 'white'}}>O</span>;

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
