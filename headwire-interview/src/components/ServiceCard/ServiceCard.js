import './ServiceCard.scss'

const ServiceCard = ({ information }) => {
    return (
        <div className='service-cards'  >
            <img src={information.img} alt={information.title + 'icon'}/>
            <h3>{information.title}</h3>
            <p>{information.description}</p>
            <button>READ MORE</button>
        </div>
    );
}

export default ServiceCard;