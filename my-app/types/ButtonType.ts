type ButtonCharacter = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '+' | '-' | '*' | '/' | '=' | '.' | '⌫' ;

export type ButtonType = {
    character?: ButtonCharacter
    className?: string
    label?: string
    onClick: (value: ButtonCharacter) => void
}