import {ChangeEvent, ChangeEventHandler} from "react";

type ActionBarProps = {text: string, onChangeFunction: (event: ChangeEvent<HTMLInputElement>) => void}

export default function ActionBar(props: ActionBarProps) {
    return (
        <div>
            <label htmlFor={"search-bar"}>Search: </label>
            <input type={"text"} value={props.text} onChange={props.onChangeFunction}/>
        </div>
    )
}