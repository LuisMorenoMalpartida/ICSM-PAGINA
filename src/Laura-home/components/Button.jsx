function Button({type, target, slide, label}){
    return (
        <button type={type} data-bs-target={target} data-bs-slide-to={slide} aria-label={label}></button>
    );
}

export default Button;