
function Link({name, className}) {
    return <a
                href="#nowhere" 
                title={name} 
                className={className?`link ${className}`: "link"}
                onClick={(e)=> e.preventDefault()}
            >
                {name}
            </a>
}

export default Link
