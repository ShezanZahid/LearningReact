import React from 'react';


const validation = (props)=>{
    let validationMessage='Text Long Enough '

    if(props.inputLenth<=5){
        validationMessage='Text Too Small'
    }
    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;