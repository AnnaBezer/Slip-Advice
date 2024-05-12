import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const FavoriteAdvice = props => {

  const handleRemoveAdvice = () =>{
    props.deleteAdvice(props.advice.id);
}

return(
      <div key={props.advice.id}>
        <div className= 'advice-title-delete-icon'>
          <p className='favorite-advice-paragraph'> ADVICE #{props.advice.id} </p>
          <button onClick={handleRemoveAdvice}>
            <DeleteIcon className='delete-icon' style={{color:'#52ffa8'}}/>
            </button>
        </div>
        <p className='favorite-advice-paragraph'> {props.advice.content} </p>
        <p className='favorite-advice-paragraph'> Date of saving: {props.advice.date} </p>
        <hr />
      </div>
)
};

export default FavoriteAdvice;
