import Image from 'next/image';

interface Property {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  image: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="h-48 relative">
        <Image 
          src={property.image} 
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-blue-600 font-bold text-lg mb-4">{property.price}</p>
        <div className="flex space-x-4 text-gray-600 mb-4">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sqft</span>
        </div>
        <p className="text-gray-700">{property.location}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}