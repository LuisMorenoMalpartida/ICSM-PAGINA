function SubSection({ divClass, titleClass, contentClass, title, content}){
    return (
        <div className={divClass}>
            <h3 className={titleClass}>{title}</h3>
            <p className={contentClass}>{content}</p>
        </div>
    );
}

export default SubSection;