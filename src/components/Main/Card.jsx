const Card = ({ player }) => {
    let { name, age, price, country, image_url } = player;
    return (
        <div>
            <div className="card bg-gradient-to-r from-sky-300 to-indigo-300">
                <figure className="px-2 pt-2">
                    <img src={image_url} alt={name} className=" w-40 h-40 rounded-full" />
                </figure>
                <div className="pl-5">
                <p className="text-lg"><span className="text-xl font-semibold text-black">Name:</span> {name}</p>
                <p className="text-lg"><span className="text-xl font-semibold text-black">Age:</span> {age}</p>
                <p className="text-lg"><span className="text-xl font-semibold text-black">Price:</span> {price}</p>
                <p className="text-lg"><span className="text-xl font-semibold text-black">Country:</span> {country}</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 my-3">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;