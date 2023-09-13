const Header = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center flex flex-col md:flex-row justify-center items-center gap-5">
                <img className="w-full md:w-52" src="../../../public/logo.jpg" alt="" />
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-green-600">Bangladesh Premier League</h1>
                    <h3 className="text-xl md:text-2xl font-semibold pt-2 text-red-600">This Player are avaliable for your team</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;