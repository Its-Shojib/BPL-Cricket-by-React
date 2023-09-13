import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({player,handleCart}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 pt-4">
            {
                player.map((player,idx) => <Card key={idx} handleCart={handleCart} player={player} />)
            }
        </div>
    );
};
Cards.propTypes = {
    player: PropTypes.array,
    handleCart: PropTypes.func
}
export default Cards;