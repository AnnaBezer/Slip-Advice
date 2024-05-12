import FavoriteAdvice from '../FavoriteAdvice/FavoriteAdvice';
import './FavoriteAdvicesModal.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FavoriteAdvicesModal = props => {
  return (
    <>
    <div onClick={props.setIsOpen} className="overlay"></div>
    <div className="favorite-advices-container">
      <div className="favorite-advices-title">
          <h2> My Favorite Advices </h2>
          <AutoAwesomeIcon />
      </div>
      <div className="favorite-advices-container">
      {props.advices.map((advice)=>(
          <FavoriteAdvice key={advice.id} advice={advice} deleteAdvice={props.deleteAdvice}/>
      ))}
      </div>
    </div>
  </>
);
};

export default FavoriteAdvicesModal;