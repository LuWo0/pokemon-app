import pokeBanner from "../assets/images/poke-banner.webp";

const PageHeader = () => {
    return (
        <>
            <header className="border-y-8 rounded-md border-lime-500">
                <img src={pokeBanner} alt="poke-banner" className=" object-cover object-top w-screen h-48" />
            </header>
            <nav className="bg-lime-700 flex justify-between">
                <ul className="flex gap-2 m-1 pl-4 leading-5">
                    <li className="after:content-['-']">
                        <b className="text-sm">Quick Links </b>
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Home</a> 
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Forums</a> 
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Contact</a>
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Discord</a>
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Pokédex Hub</a>
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">GO Pokédex</a> 
                    </li>
                    <li className="after:content-['-']">
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Sword & Shield Pokédex</a>
                    </li>
                    <li>
                        <a className="hover:underline text-sm pr-1" href="#" target="_blank" rel="noopener noreferrer">Pokéarth</a>
                    </li>
                </ul>
                <div className="self-center">
                    <input className="mr-2" type="search" name="search-input" id="search-input" />
                    <button className="border-stone-700 border-2 bg-slate-300 px-2 mr-1">Search</button>
                </div>
                
            </nav>
        </>
    );
}

export default PageHeader