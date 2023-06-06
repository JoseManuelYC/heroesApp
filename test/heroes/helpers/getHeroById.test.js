import { getHeroById } from "../../../src/heroes/helpers/getHeroById"

describe('Pruebas en el getHeroById', () => {
  test('Debe de retornar un array con el heroe', () => {
    const id = "dc-wonder";
    const newHero = getHeroById(id);
    expect(newHero).toEqual({
      id: 'dc-wonder',
      superhero: 'Wonder Woman',
      publisher: 'DC Comics',
      alter_ego: 'Princess Diana',
      first_appearance: 'All Star Comics #8',
      characters: 'Princess Diana'
    })
  })
  
  
})
