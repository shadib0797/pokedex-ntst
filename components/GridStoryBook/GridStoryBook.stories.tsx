import { Meta, Story } from "@storybook/react";
import "twin.macro";
import GridStoryBook, {GridStoryBookProps} from "./GridStoryBook";


export default{
    title:'Components/Grid',
    component:GridStoryBook,
} as Meta

const Template: Story<GridStoryBookProps> = (args) => <GridStoryBook {...args}>
    {[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png"},{"name":"spearow","url":"https://pokeapi.co/api/v2/pokemon/21/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png"},{"name":"fearow","url":"https://pokeapi.co/api/v2/pokemon/22/","image":"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png"},].map(n => (
        <div tw="flex flex-col p-6 text-center bg-white rounded-2xl">
            <img src={n.image} alt={n.name}/>
            <div tw="text-base mt-4">{n.name}</div>
        </div>
    ))}
</GridStoryBook>

export const Default = Template.bind({});
Default.args={
    screen:"lg"
}
