function Button({filterFuction, category, buttonClass}){
    return (
        <button onClick={()=>filterFuction(category)} className={buttonClass}>
            {category}
        </button>
    );
}

export default Button;