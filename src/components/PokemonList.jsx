const PokemonList = ({ pokemon }) => {
  
  return (
    <div className="flex justify-center items-center">
      <table className="table-auto w-screen">
        <thead>
          <tr>
            <th
              className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner"
              rowSpan={2}
            >
              Isshu No.
            </th>
            <th
              className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner"
              rowSpan={2}
            >
              Pic
            </th>
            <th
              className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner"
              rowSpan={2}
            >
              Name
            </th>
            <th
              className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner"
              rowSpan={2}
            >
              Type
            </th>
            <th
              className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner"
              rowSpan={2}
            >
              Abilities
            </th>
            <th
              className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner"
              colSpan={6}
            >
              Base Stats{" "}
            </th>
          </tr>
          <tr className="rounded-sm border-2 border-solid border-stone-800 bg-lime-700 text-white font-bold shadow-inner">
            <th className="border-2 rounded-sm border-solid border-stone-800">
              HP
            </th>
            <th className="border-2 rounded-sm border-solid border-stone-800">
              Att
            </th>
            <th className="border-2 rounded-sm border-solid border-stone-800">
              Def
            </th>
            <th className="border-2 rounded-sm border-solid border-stone-800">
              S.Att
            </th>
            <th className="border-2 rounded-sm border-solid border-stone-800">
              S.Def
            </th>
            <th className="border-2 rounded-sm border-solid border-stone-800">
              Spd
            </th>
          </tr>
        </thead>

        <tbody>
          {pokemon.map((p) => (
            <tr
              className="bg-stone-700 border-solid text-white"
              key={p.name}
            >
              <td className="text-center border-stone-600 border-2">#{p.id}</td>
              <td className="border-stone-600 border-2">
                <img
                  className="mx-auto"
                  src={p.sprites.front_default}
                  alt="pokemon image"
                />
              </td>
              <td className="text-center border-stone-600 border-2">
                {p.name}
              </td>
              <td className=" text-center whitespace-pre-line border-stone-600 border-2">
                {p.types.map((type) => `${type.type.name}\n`)}
              </td>
              <td className="text-center whitespace-pre-line border-stone-600 border-2">
                {p.abilities.map((a) => `${a.ability.name}\n`)}
              </td>
              {p.stats.map((stat) => (
                <td className="text-center border-stone-600 border-2">
                  {stat.base_stat}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
