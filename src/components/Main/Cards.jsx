import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({player,handleCart}) => {
    return (
        <div className="grid grid-cols-3 w-full gap-5 pt-4">
            {
                player.map(player => <Card key={player.id} handleCart={handleCart} player={player} />)
            }
        </div>
    );
};
Cards.propTypes = {
    player: PropTypes.array,
    handleCart: PropTypes.func
}
export default Cards;