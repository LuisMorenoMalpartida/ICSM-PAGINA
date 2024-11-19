function ImageContainer({classDiv, src, classImg}){
    return (
        <div className={classDiv}>
            <img src={src} className={classImg}/>
        </div>
    );
}

export default ImageContainer;