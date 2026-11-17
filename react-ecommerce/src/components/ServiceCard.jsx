
const ServiceCard = (props) => {
    return (
    <div className={`card ${props.className}`}>
        <div className="content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>{props.buttonText}</button>
        </div>
        <div>
            <img src={props.image} alt={props.title} />
        </div>
    </div>
    );
};

export default ServiceCard