export default function Square({ value, onClick }) {
    return (
        <button type='button' className='square' onClick={onClick}>{value}</button>
    )
}
