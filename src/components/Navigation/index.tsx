import { NavigationItem } from "../NavigationItem"

export const Navigation = (props:any) => {
    return (
        <div className="sidenav">
            <NavigationItem text="Decode" selected={props.selectedItem === "decode"} onClick={() => props.onItemClick("decode")} />
            <NavigationItem text="Encode" selected={props.selectedItem === "encode"} onClick={() => props.onItemClick("encode")} />
        </div>
    )
}