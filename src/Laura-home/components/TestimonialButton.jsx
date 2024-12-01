function TestimonialButton({buttonClass, buttonFunction, number}){
    return(
        <button onClick={() => buttonFunction(number)} className={buttonClass}></button>
    );
}

export default TestimonialButton;