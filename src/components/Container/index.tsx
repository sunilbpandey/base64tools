import Switch from "react-switch";
import { Text } from "../Text"

export const Container = (props:any) => {
    const _setMode = (checked: any) => {
        props.setMode(checked ? "encode" : "decode");
    }

    let inputPlaceholderText;
    let outputPlaceholderText;

    if (props.mode === "decode") {
        inputPlaceholderText = "Type or paste the bae64 encoded text here...";
        outputPlaceholderText = "The decoded text will appear here...";
    } else {
        inputPlaceholderText = "Type or paste the text to encode here...";
        outputPlaceholderText = "The base64 encoded text will appear here...";
    }

    return (
        <div className="container">
            <Text placeholder={inputPlaceholderText} onChange={props.onTextChange} />
            <div className="controls">
                <Switch
                    checked={props.mode === "encode"}
                    onChange={_setMode}
                    width={100}
                    onColor="#fff"
                    offColor="#fff"
                    boxShadow="0px 0px 1px 2px rgba(0, 0, 0, 0.2)"
                    checkedIcon={
                        <div className="switch-icon-checked">Encode</div>
                    }
                    uncheckedIcon={
                        <div className="switch-icon-unchecked">Decode</div>
                    }
                />
            </div>
            <Text placeholder={outputPlaceholderText} value={props.convertedText} readOnly={true} />
        </div>
    )
}
