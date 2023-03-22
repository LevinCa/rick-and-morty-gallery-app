import CharacterCard from "./CharacterCard";

type Character = {name: string, image: string, origin: {name: string}}

type CharactersProps = {characters: Character[]}

export default function CharacterGallery (props: CharactersProps) {
    return (
        <div className="character-gallery">
            {props.characters.map(character => {
                return (<CharacterCard character={character}/>)
            })}
        </div>
    )
}