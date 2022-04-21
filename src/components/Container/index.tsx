import { Convert } from "../Convert"
import { Text } from "../Text"

export const Container = (props:any) => {
    return (
        <div className="container">
            {props.mode === "decode" && (
                <>
                    <Text placeholder="Type or paste the text to decode here..." onChange={props.onTextChange} />
                    <Convert onClick={props.onConvertClick} text="Decode" />
                    <Text placeholder="The decoded text will appear here..." value={props.convertedText} readOnly={true} />
                </>
            )}
            {props.mode === "encode" && (
                <>
                    <Text placeholder="Type or paste the text to encode here..." onChange={props.onTextChange} />
                    <Convert onClick={props.onConvertClick} text="Encode" />
                    <Text placeholder="The encoded text will appear here..." value={props.convertedText} readOnly={true} />
                </>
            )}
        </div>
    )
}
