import Link from "./Link";


export default function Cta({name, className}) {
    return <Link name={name} className={className?`cta ${className}`: "cta"}/>
}
