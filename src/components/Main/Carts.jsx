import PropTypes from 'prop-types';
import Cart from './Cart';
const Carts = ({ selectedPlayer, handleRemove}) => {
    let totalCost = 0;
    selectedPlayer.forEach(element => {
        totalCost += element.price;
    });
    return (
        <div className='sticky top-0'>
            <h1 className='text-center text-xl md:text-3xl text-yellow-500 font-bold'>Player Added: {selectedPlayer.length}</h1>
            <h1 className='text-center text-xl md:text-3xl text-yellow-500 font-bold'>Total Cost: {totalCost}</h1>
            <div className='space-y-3 w-full mx-auto text-center'>
                {
                    selectedPlayer.map((player, idx) => <Cart key={idx} player={player} handleRemove={handleRemove}></Cart>)
                }
            </div>
        </div>
    );
};
Carts.propTypes = {
    selectedPlayer: PropTypes.array,
    handleRemove: PropTypes.func
}
export default Carts;