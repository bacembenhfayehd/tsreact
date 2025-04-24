import React, { FC, useState } from "react";
import { animals as initialAnimals } from "../assets/data";
import Filter from "../components/Filter";
import Animal from "../components/Animal";

const Home: FC = () => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [filtredAnimals, setFiltredAnimal] = useState(initialAnimals);

  const handelFilter = (searchItem:string) => {
    const filtred = animals.filter((animal) => 
        animal.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        animal.race.toLowerCase().includes(searchItem.toLowerCase()) || 
        animal.city.toLowerCase().includes(searchItem.toLowerCase())
    )
    setFiltredAnimal(filtred);
  }


  const handelDelete = (id:number) => {
    setAnimals(animals.filter((animal) => animal.id !== id));
    setFiltredAnimal(filtredAnimals.filter((animal) => animal.id !== id));
  }

  return (
    <div>
      <h2>Liste des animaux disponibles dans toute la tunisie </h2>
      <Filter onFilter={handelFilter} />
      <div className="list-animals">
        {filtredAnimals.map((animal) => (
          <Animal
            key={animal.id}
            name={animal.name}
            image={animal.image}
            city={animal.city}
            race={animal.race}
            onDelete={() => handelDelete(animal.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
