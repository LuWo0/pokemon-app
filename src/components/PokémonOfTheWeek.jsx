const PokémonOfTheWeek = () => {
    return (
        <>
            <div className="flex flex-col">
                <nav>
                    <ul>
                        <li>
                            <h1 className="bg-lime-700 font-bold text-center px-8 py-2  border-y-2 bg-gradient-to-t from-lime-700 to-lime-500 border-slate-700">Pokémon of the Week</h1>
                            <img src="../../assets/mimikyu.png" alt="mimikyu picture" />

                        </li>
                        <li>
                            <h1 className="bg-lime-700 font-bold text-center px-8 py-2 border-y-2 bg-gradient-to-t from-lime-700 to-lime-500 border-slate-700">Next in Japan</h1>
                            <img src="../../assets/lechonk.webp" alt="lechonk picture" />
                            <div className="bg-lime-700 text-xs py-1">
                                <p>Episode 1217</p>
                                <p className="font-bold">Oh NO! LeChonk Has Been Captured by Team Rocket!</p>
                            </div>
                            <img src="../../assets/airdate.jpeg" alt="pokeball image" />
                            <p className="bg-lime-700 text-xs py-1">Airdate: 14/10/2022</p>
                        </li>
                        <li>
                            <h1 className="bg-lime-700 font-bold text-center px-8 py-2 border-y-2 bg-gradient-to-t from-lime-700 to-lime-500 border-slate-700">Recently in USA</h1>
                            <img src="../../assets/recently.jpeg" alt="recently in usa" />
                            <div className="bg-lime-700 text-xs py-1">
                                <p>Episode 1179</p>
                                <p className="font-bold">Showdown at the Gates of Warp!</p>
                            </div>
                        </li>
                        <li>
                            <h1 className="bg-lime-700 font-bold text-center px-8 py-2 border-y-2 bg-gradient-to-t from-lime-700 to-lime-500 border-slate-700">Next in USA</h1>
                            <img src="../../assets/spirittomb.jpeg" alt="spirittomb" />
                            <div className="bg-lime-700 text-xs py-1">
                                <p>Episode 1180</p>
                                <p className="font-bold">The Special Express!</p>
                                <p>Airdate: 21/10/22</p>
                            </div>
                        </li>
                        <li>
                            <h1 className="bg-lime-700 font-bold text-center px-8 py-2 border-y-2 bg-gradient-to-t from-lime-700 to-lime-500 border-slate-700">Social Media</h1>
                            <nav className="bg-lime-700">
                               <ul className="flex justify-center gap-1">
                                <li><img src="../../assets/Facebook.png" alt="Facebook" className=" w-8 h-8" /></li>
                                <li><img src="../../assets/Twitter.png" alt="Twitter" className=" w-8 h-8" /></li>
                                <li><img src="../../assets/Youtube.png" alt="Youtube" className=" w-8 h-8" /></li>
                                <li><img src="../../assets/Instagram.png" alt="Instagram" className=" w-8 h-8" /></li>
                               </ul>
                            </nav>
                        </li>
                        <li>
                            <h1 className="bg-lime-700 font-bold text-center px-8 py-2 border-y-2 bg-gradient-to-t from-lime-700 to-lime-500 border-slate-700">In Association With</h1>
                            <div className="bg-lime-700 flex flex-col justify-start items-center gap-1 py-2">
                                <img className=" w-20 h-8" src="../../assets/pm.png" alt="pm" />
                                <img className=" w-20 h-8" src="../../assets/lpoke.png" alt="lpoke" />
                            </div>
                        </li>
                    </ul>
                </nav>   
            </div>
        </>
    );
}

export default PokémonOfTheWeek;