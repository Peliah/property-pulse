import InfoBox from "./InfoBox"

const InfoBoxes = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox
                        heading="For Renters"
                        backgroundColor="bg-gray-100"
                        body="Find your dream rental property. Bookmark properties and contact
                            owners."
                        btnInfo={{
                            btnLink: '/properties',
                            btnBgColor: "bg-black",
                            btnText: "Find your dream rental property"
                        }}
                    />
                    <InfoBox
                        heading="For Property Owners"
                        backgroundColor="bg-blue-100"
                        body="List your properties and reach potential tenants. Rent as an
                            airbnb or long term."
                        btnInfo={{
                            btnLink: '/properties/add',
                            btnBgColor: "bg-blue-600",
                            btnText: "Add Property"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default InfoBoxes