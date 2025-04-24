import React, { FC, useState } from "react";
import { animals as initialAnimals } from "../assets/data";
import Filter from "../components/Filter";
import Animal from "../components/Animal";

const Home: FC = () => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [filtredAnimals, setFiltredAnimal] = useState(initialAnimals);

  return (
    <div>
      <h2>Liste des animaux disponibles dans toute la tunisie </h2>
      <Filter />
      <div className="list-animals">
        {filtredAnimals.map((animal) => (
          <Animal
            key={animal.id}
            name={animal.name}
            image={animal.image}
            city={animal.city}
            race={animal.race}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
