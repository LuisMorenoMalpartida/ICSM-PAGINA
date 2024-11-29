function Icon({ link, target, img, imgClass }){
    return <a href={link} target={target}><img src={img} className={imgClass}/></a>
}

export default Icon;