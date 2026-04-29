
import PlantsCard from "../PlantsCard/PlantsCard";
import { useLoaderData } from "react-router";


const Home = () => {
    const { plants } = useLoaderData();
    console.log(plants);
    return (
        <div>
           
              <p>Plant Cards</p>
              {
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        plants.map(plant=>(<PlantsCard key={plant.id} plant={plant}></PlantsCard>))
                    }
                </div>
              }

            
        </div>
    );
};

export default Home;