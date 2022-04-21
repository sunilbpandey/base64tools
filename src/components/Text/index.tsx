export const Text = (props:any) => {
    return (
        <textarea className="textbox" placeholder={props.placeholder} onInput={props.onChange} value={props.value} readOnly={props.readOnly || false}></textarea>
    )
}
