import './Quote.scss'
import founder from '../../assets/imgs/founder-of-company.png';

const Quote = () => {
    return (
        <div className='quote-section'>
            <blockquote>
            "Even if you don't have a ready sketch of <br/> what you want - we will help you to get the <br/> result you dreamed of."
            </blockquote>

            <div class="founder-wrap">
            <img src={founder} alt="portrait of founder" />
            <div class="founder-info">
                <h4>David Oswald</h4>
                <h6>FOUNDER OF COMPANY</h6>
            </div>
            </div>
        </div>
    );
}

export default Quote;
