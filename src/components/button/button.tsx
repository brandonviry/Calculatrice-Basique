import './button.css'
interface ButtonProps {
  children: React.ReactNode
  onclick?: () => void
  className?: string
  style?: React.CSSProperties
}

export default function Button({ children, onclick , className , style }: ButtonProps) {

  return (
    <button className={`button ${className?className:''}`} onClick={onclick}  style={style?style:{}}>
      <p>{children}</p>
    </button>
  )
}

