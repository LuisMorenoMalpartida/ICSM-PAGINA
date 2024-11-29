function DataContainer({title, dates}){
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {dates.map((e)=>{
                    return <li>{e}</li>
                })}
            </ul>
        </div>
    );
}

export default DataContainer;