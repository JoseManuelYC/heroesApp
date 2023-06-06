const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { Dc } = require("../../../src/heroes/pages/Dc")

describe('Pruebas en el DC page', () => {
  test('Debe de mostrar el titulo', () => {
    render(
      <MemoryRouter>
        <Dc />
      </MemoryRouter>
    )
    expect(screen.getByRole("heading",{level:1}).innerHTML).toContain("Dc Comics");
  })
  
  
})
