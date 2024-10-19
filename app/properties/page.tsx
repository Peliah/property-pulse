import PropertyCard from '@/components/PropertyCard'
import { Property } from '@/types/property';
import { fetchProperties } from '@/utils/request';

const PropertyPage = async () => {
    const properties: Property[] = await fetchProperties();

    //sort properties by date
    properties.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {properties.length === 0 ? <p>No Properties found</p> : (

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            properties.map((property: Property) => (
                                <PropertyCard key={property._id.toString()} property={property} />
                            ))
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default PropertyPage