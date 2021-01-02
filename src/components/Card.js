import React from 'react';
const Card = ({name,email,id}) => {
    return(
        <div className='tc bg-light-green dib pd3 br3 ma2 grow bw2 shadow-5'>
            <img alt='friends' src={`https://robohash.org/${id}?50x50`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div> 
        </div>
    );
}
 export default Card;