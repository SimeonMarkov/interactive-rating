import {useLocation} from "react-router";
import '../thank-you.css';

type RateInfo = {
    selectedRate?: number,
    maxRate: number
}

export function ThankYouComponent({maxRate}: RateInfo) {

    const location = useLocation();
    const selectedRate = location.state?.selectedRate;

    return (
      <section className='thank-you-container'>
          <span>
              <img src='/interactive-rating/illustration-thank-you.svg' alt="Thank you image"/>
          </span>
          <span className='choice-label'>You selected {selectedRate} out of {maxRate}</span>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </section>
    );
}