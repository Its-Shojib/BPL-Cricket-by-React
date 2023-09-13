import PropTypes from 'prop-types';
const Cart = ({selectedPlayer}) => {
    return (
        <div>
            <h2>{selectedPlayer.length}</h2>
        </div>
    );
};
Cart.propTypes = {
    selectedPlayer: PropTypes.array,

}
export default Cart;