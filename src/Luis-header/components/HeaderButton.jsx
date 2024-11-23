function HeaderButton({ href, classLi, content}){
    return (
        <li>
            <a href={href} className={classLi}>{content}</a>
        </li>
    );
}

export default HeaderButton;