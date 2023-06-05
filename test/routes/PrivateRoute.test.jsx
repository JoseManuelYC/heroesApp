import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../src/routes/PrivateRoute"

describe('Pruebas en el PrivateRoute', () => {
  test('Debe de mostrar el children si esta logeado', () => {
    Storage.prototype.setItem=jest.fn();
    const stateLogged={
      logged:true,
      user:{
        id:"ABC",
        name:"JoseManuel",
      }
    }
    render(
      <AuthContext.Provider value={stateLogged}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Private Route')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');

  })
  
  
})
