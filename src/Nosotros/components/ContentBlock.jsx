function ContentBlock({claseId, title, content}){
    return (
        <section id={claseId}>
            <div className={claseId}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </section>
    );
}

export default ContentBlock;