import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { Navbar } from "../../../src/UI/components/Navbar"


// Se puede hacer mock de una libreria de la siguiente forma

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
  ...jest.requireActual("react-router-dom"), // se puede hacer un spread para no colocar todos los args que requiere el mock
  useNavigate: () => mockUseNavigate, // Y solo usar el que se necesita en este caso el useNavigate
}))

describe('Pruebas en el FC Navbar', () => {
  const stateLogged = {
    logged:true,
    user:{
      id:"ABC",
      name:"JoseManuel",
    },
    logout:jest.fn(),
  }
  beforeEach(()=> jest.clearAllMocks());
  test('Debe de mostrar el username en el NavBar ', () => {

    render(
      <AuthContext.Provider value={stateLogged}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText("JoseManuel")).toBeTruthy();
  })

  test('Debe de llamar el logout y navigate al presionar el btn', () => {

    render(
      <AuthContext.Provider value={stateLogged}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
      </AuthContext.Provider>
    )
    const btnElement = screen.getByRole("button");
    fireEvent.click( btnElement );
    expect(stateLogged.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    
  })
})
