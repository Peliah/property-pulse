import Image from 'next/image';

type PropertyHeaderProps = {
    image: string;
};

const PropertyHeader = ({ image }: PropertyHeaderProps) => {
    return (
        <section>
            <div className="container-xl m-auto">
                <div className="grid grid-cols-1">
                    <Image
                        src={"/images/properties/" + image}
                        alt=""
                        className="object-cover h-[400px] w-full"
                        sizes="100vw"
                        height={0}
                        width={0}
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}

export default PropertyHeader