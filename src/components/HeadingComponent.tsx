import '../heading.css';

type ButtonProps = {
    text: string
}

export function HeadingComponent({text}: ButtonProps) {
    return <h1>{text}</h1>
}