import Link from "next/link"

interface props {
    heading: string,
    backgroundColor: string,
    body: string,
    btnInfo: {
        btnLink: string,
        btnBgColor: string,
        btnText: string
    }
}
const InfoBox = (props: props) => {
    return (
        <div className={`${props.backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{props.heading}</h2>
            <p className="mt-2 mb-4">
                {props.body}
            </p>
            <Link
                href={props.btnInfo.btnLink}
                className={`inline-block ${props.btnInfo.btnBgColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
            >
                {props.btnInfo.btnText}
            </Link>
        </div>
    )
}

export default InfoBox