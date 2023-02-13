// @ts-check
import { Link } from "react-router-dom";

function ButtonLink({ children, href = '', title = '', color = 'bg-slate-200' }) {
    return (
        <Link
            className={`${color} border-2 border-slate-400 hover:bg-slate-300 p-2 rounded-xl flex gap-1`}
            to={href}
            title={title}
        >
            {children}
        </Link>
    );
}

export default ButtonLink;
