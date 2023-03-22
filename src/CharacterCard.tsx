
type CharacterProps = {character: {name: string, image: string, origin: {name: string}}}

export default function CharacterCard (props: CharacterProps) {
    return (
        <div className="character-card">
            <h3>{props.character.name}</h3>
            <img src={props.character.image}/>
            <p>{props.character.origin.name}</p>
        </div>
    )
}