const Simpsons = (props) => {
    const {name, surname, picture, paragraph} = props;
    return (
        <div>
            <h3>{name} {surname}</h3>
            <img src={picture} alt={name}/>
            <p>{paragraph}</p>
        </div>
    );
};

export {Simpsons};
