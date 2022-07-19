interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange: (value: unknown) => void
}

const Input = ({ name, id, onChange, label, ...rest }: InputProps) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input name={name} id={id} {...rest} onChange={onChange} />
  </div>
)

export default Input
