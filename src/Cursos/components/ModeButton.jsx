import Button from './Button';

function ModeButton({divClass, buttonClass, filterFunction, mode}){
    return (
        <div className={divClass}>
            <Button filterFuction={filterFunction} category={mode} buttonClass={buttonClass}/>
        </div>
    )
}

export default ModeButton;