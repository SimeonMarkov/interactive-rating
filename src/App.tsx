import './App.css'
import {RatingOptionsComponent} from "./components/RatingOptionsComponent.tsx";
import {SubmitBtnComponent} from "./components/SubmitBtnComponent.tsx";
import {HeadingComponent} from "./components/HeadingComponent.tsx";
import {IconStarComponent} from "./components/IconStarComponent.tsx";

function App() {

  return (
      <section>
          <IconStarComponent />
          <HeadingComponent text='How did we do?' />
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="rating-options-container">
              <RatingOptionsComponent />
          </div>
          <SubmitBtnComponent />
      </section>
  );
}

export default App
