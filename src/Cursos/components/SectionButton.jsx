function SectionButton({filterFuction, category, buttonClass}){
    return (
        <button onClick={()=>filterFuction(category)} className={buttonClass}>
            {category}
        </button>
    );
}

export default SectionButton;