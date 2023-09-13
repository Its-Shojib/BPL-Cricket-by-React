import Card from "./Card";

const Cards = ({player}) => {
    return (
        <div className="grid grid-cols-3 w-full gap-5 pt-4">
            {
                player.map(player => <Card key={player.id} player={player} />)
            }
        </div>
    );
};

export default Cards;