import { useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart"
import { useEffect } from "react";
const Main = () => {
    let [player, setPlayer] = useState([]);
    let [selectedPlayer,setSelectedPlayer] = useState([]);

    let handleCart = (player) =>{
        let newSelected = [...selectedPlayer,player]
        setSelectedPlayer(newSelected);
        console.log(selectedPlayer.length);
    }
    useEffect(() => {
        fetch('../../../public/player.json')
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, [])
    return (
        <div className="flex max-w-screen-2xl mx-auto bg-[url('bg.jpg')] bg-cover bg-no-repeat bg-center px-4 md:px-8 lg:px-12">
            <div className="w-2/3">
                <Cards player={player} handleCart={handleCart}></Cards>
            </div>
            <div className="w-1/3">
                <Cart selectedPlayer={selectedPlayer}></Cart>
            </div>
        </div>
    );
};

export default Main;