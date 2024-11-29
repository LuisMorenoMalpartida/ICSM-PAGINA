function ImageContainer({divClass, img}){
    return (
        <div className={divClass}>
            <img src={img} />
        </div>
    );
}

export default ImageContainer;