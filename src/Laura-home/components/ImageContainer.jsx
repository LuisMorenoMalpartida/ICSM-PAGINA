function ImageContainer({classDiv, src, alt, classImg}){
    return (
        <div className={classDiv}>
            <img src={src} alt={alt} className={classImg}/>
        </div>
    );
}