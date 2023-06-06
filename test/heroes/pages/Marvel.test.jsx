import { render, screen } from "@testing-library/react"
import { Marvel } from "../../../src/heroes/pages/Marvel"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en el Marvel Page', () => {
  test('Debe de mostrar el title Marvel Page', () => {
    render(
      <MemoryRouter>
        <Marvel />
      </MemoryRouter>
    )
    expect(screen.getByRole("heading",{level:1}).innerHTML).toContain("Marvel Comics");
  })
  
  
})
