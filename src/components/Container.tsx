import { ContainerStyles } from "../styles/container"

interface ContainerProps {
    children?: any
}

function Container({  children  }: ContainerProps) {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}

export default Container