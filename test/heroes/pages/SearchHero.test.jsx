
import { fireEvent, render, screen } from "@testing-library/react";
import  { SearchHero }  from "../../../src/heroes";
import { MemoryRouter } from "react-router-dom";

const mockSearchValue = jest.fn();

jest.mock('react-router-dom', ()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockSearchValue,
}))

describe('Pruebas en el FC SearchHero', () => {
  beforeEach(() => jest.clearAllMocks());
  test('Debe de mostrarse correctamente con valores por defecto ', () => {
    const { container } = 
    render(
        <MemoryRouter>
          <SearchHero />
        </MemoryRouter>
      )
    expect(container).toMatchSnapshot();
  })
  test('Debe de mostrar el valor del query y el input el value con la query', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']} >
        <SearchHero />
      </MemoryRouter>
    )
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");
    const img = screen.getByRole("img");
    expect(img.src).toContain("/heroes/dc-batman.jpg");
    const alert = screen.getByLabelText("danger");
    expect(alert.style.display).toBe("none");
  })
  test('Debe de mostrar error si no se muestra el Hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']} >
        <SearchHero />
      </MemoryRouter>
    )
    const alert = screen.getByLabelText("danger");
    expect(alert.style.display).toBe("");
  })
  test('Debe de llamar el navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter initialEntries={['/search']} >
        <SearchHero />
      </MemoryRouter>
    )
    const formelement = screen.getByRole("textbox");
    fireEvent.change( formelement, {target : {name:"searchText", value:"superman"}} );
    const form = screen.getByLabelText("form");
    fireEvent.submit(form);
    expect(mockSearchValue).toHaveBeenCalledWith("?q=superman");
  })
  
  
})
