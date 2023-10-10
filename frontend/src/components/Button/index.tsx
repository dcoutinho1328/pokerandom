import React, { useState } from "react"
import "./styles.css"
import classNames from "classnames"

type Props = {
    text: string,
    img?: any
}

const Button: React.FC<Props> = ({ text, img }) => {

    const [label, setLabel] = useState<string>(`${text}`)

    return <div
        className={classNames("button")}
        onClick={() => {
            setLabel("Clicked!")            
        }}
    >
        {label}
    </div>
}

export default Button