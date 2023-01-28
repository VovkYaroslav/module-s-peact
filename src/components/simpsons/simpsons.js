
const Simpsons = (props) => {
    const {name, surname, image, paragraph }=props;
    return (
        <div>
            <h3>{name} {surname}</h3>
            <img src={image} alt={name}/>
            <p>{paragraph}</p>
        </div>
    );
};

export {Simpsons};
