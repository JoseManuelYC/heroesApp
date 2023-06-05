import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/routes/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en el PublicRoute', () => {
  test('Si no esta autenticado debe mostrar el children sino esta autenticado', () => {
    const stateLogged = {
      logged:false,
    }
    render(
      <AuthContext.Provider value={stateLogged}>
        <PublicRoute>
          <h1>No esta autenticado</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText("No esta autenticado")).toBeTruthy();
  })
  test('Debe de navegar si se esta logeado', () => {
    const stateLogged = {
      logged:true,
      user:{
        name:"Jose",
        id:"ABC",
      }
    }
    render(
      <AuthContext.Provider value={stateLogged}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Public Route</h1>
              </PublicRoute>
            } />
            <Route path="marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText("Marvel Page")).toBeTruthy();
  })
  
  
  
})
