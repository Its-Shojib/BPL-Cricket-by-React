import PropTypes from 'prop-types';
const Cart = ({ player, handleRemove}) => {
    let { name, image_url } = player;
    return (
        <div>
            <div className=' min-w-fit bg-gray-300 block md:flex gap-5 items-center justify-between rounded-xl'>
                <img className=' w-20 h-16' src={image_url} alt="" />
                <p className='text-xl lg:text-2xl'>{name}</p>
                <button onClick={()=> handleRemove(player)} className=' bg-red-500 px-3 py-2 text-white rounded-xl mr-3 text-sm'>Remove</button>
            </div>

        </div>
    );
};
Cart.propTypes = {
    player: PropTypes.object,
    handleRemove: PropTypes.func
}
export default Cart;