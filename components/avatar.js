export default function Avatar(props) {
    return (
        <img
            className="inline-block rounded-full ring-2 ring-white shadow-inner"
            width={props.size}
            height={props.size}
            src={props.src}
            alt=""
        />
    )
}
