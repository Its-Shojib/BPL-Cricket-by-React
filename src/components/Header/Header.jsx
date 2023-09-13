const Header = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center text-green-600 flex justify-center items-center gap-5">
                <img className="w-52" src="../../../public/logo.jpg" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Bangladesh Premier League</h1>
                    <h3 className="text-2xl font-semibold pt-2">This Player are avaliable for your team</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;