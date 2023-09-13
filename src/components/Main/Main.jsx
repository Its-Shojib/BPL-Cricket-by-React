import { useState } from "react";
import Cards from "./Cards";
import Carts from "./Carts"
import { useEffect } from "react";
const Main = () => {
    let [player, setPlayer] = useState([]);
    let [selectedPlayer, setSelectedPlayer] = useState([]);

    let handleCart = (player) => {
        
        let alreadyExist = selectedPlayer.find(item => item.id === player.id);
        let cost = player.price;
        if (!alreadyExist) {
            selectedPlayer.forEach(item=>{
                cost = cost + item.price;
            })
            if(cost > 1500){
                return ;
            }
            else{
                let newSelected = [...selectedPlayer, player]
                setSelectedPlayer(newSelected);
            }

        }
    }
    // Remove from Cart
    let handleRemove = (player) => {
        let restPlayer = selectedPlayer.filter(item => item.id !== player.id)
        setSelectedPlayer(restPlayer)
    }
    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, []);


    return (
        <div className="flex gap-5 max-w-screen-2xl mx-auto bg-[url('bg.jpg')] bg-cover bg-no-repeat bg-center px-4 md:px-8 lg:px-12">
            <div className="w-2/3">
                <Cards player={player} handleCart={handleCart}></Cards>
            </div>
            <div className="w-1/3">
                <Carts selectedPlayer={selectedPlayer} handleRemove={handleRemove}></Carts>
            </div>
        </div>
    );
};

export default Main;