// @ts-check

function InputField(
    {
        label = 'campo de texto',
        maxLength,
        minLength,
        name = '',
        onChange,
        pattern,
        placeholder = '',
        required,
        title = '',
        type = 'text',
        value,
    }
) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={name}>{label} {required && <span className='text-red-700 text-xl'>*</span>}</label>
            <input
                className='p-1 border-2 border-slate-400 rounded-md'
                id={name}
                maxLength={maxLength}
                minLength={minLength}
                name={name}
                onChange={onChange}
                pattern={pattern}
                placeholder={placeholder}
                required={required}
                title={title}
                type={type}
                value={value}
            />
        </div>
    );
}

export default InputField;
