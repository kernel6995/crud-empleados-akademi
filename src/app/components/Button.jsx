// @ts-check
function Button({ children, disabled, onClick, title = '', color = 'slate', type = 'button' }) {
    return <button
        className={`${color} border-2 border-slate-400 hover:bg-slate-300 p-2 rounded-xl flex gap-1`}
        disabled={disabled}
        onClick={onClick}
        title={title}
        type={type}
    >
        {children}
    </button>
}

export default Button;
