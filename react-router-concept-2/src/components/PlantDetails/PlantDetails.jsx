import { useLoaderData, useParams } from "react-router";


const PlantDetails = () => {
    const data=useLoaderData();
    console.log(data);
    const { id }= useParams();
    console.log(id);
     const { name, image, category, price, description } = data.plants;
    return (
        <div>
            
            <h1>Plant Details Page</h1>
            <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 h-full flex flex-col group">
      {/* Equal Size Image Container */}
      <figure className="relative h-64 w-full overflow-hidden bg-base-200">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <div className="badge badge-glass border-none bg-white/20 backdrop-blur-md text-white font-bold">
            ${price}
          </div>
        </div>
      </figure>

      {/* Content Area */}
      <div className="card-body p-5 flex-grow flex flex-col">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-primary uppercase tracking-tighter">{category}</span>
          <h2 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
            {name}
          </h2>
        </div>
        
        {/* line-clamp ensures text height stays consistent */}
        <p className="text-sm text-base-content/70 line-clamp-2 my-3">
          {description || "A beautiful addition to your home, perfect for fresh air and aesthetics."}
        </p>

        {/* Action buttons stay pinned to the bottom */}
        <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-base-200">
          <button to={`/details/${id}`} className="btn btn-secondary btn-sm px-4">
            View Details
          </button>
          <button className="btn btn-primary btn-sm px-6 shadow-md shadow-primary/20">Add</button>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default PlantDetails;