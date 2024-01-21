import LocationSearch from './LocationSearch';
import './MainComponent.css';

function MainComponent() {

  return (
    <div className="main-container">
      <LocationSearch locationNo={1}></LocationSearch>
      <LocationSearch locationNo={2}></LocationSearch>
    </div>
  )
}

export default MainComponent