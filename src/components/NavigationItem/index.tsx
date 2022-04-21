export const NavigationItem = (props:any) => {
    return (
        <button className={`navitem ${props.selected ? "selected" : ""}`} onClick={props.onClick}>{props.text}</button>
    )
}