// import { render, screen } from "@testing-library/react"
// import { MemoryRouter } from "react-router-dom"
// import { AuthContext } from "../../src/auth"
// import { AppRouter } from "../../src/routes"


describe('Pruebas en el FC AppRouter', () => {
  test('debe de mostrar el login si no esta autenticado', () => {
   /*  const stateLogged = {
      logged: false,
    } */
/*       render(
        <MemoryRouter initialEntries={['marvel']}>
          <AuthContext.Provider value={ stateLogged}>
            <AppRouter />
          </AuthContext.Provider>
        </MemoryRouter>
      ) */
  })
  test('Debe de mostrar el componente de marvel si esta autenticado', () => {
   /*  const stateLogged = {
      logged: true,
      user:{
        id:"ABC",
        name:"Jose M",
      }
    }
      render(
        <MemoryRouter initialEntries={['/login']}>
          <AuthContext.Provider value={ stateLogged }>
            <AppRouter />
          </AuthContext.Provider>
        </MemoryRouter>
      )
      expect(screen.getByText("Marvel Comics")).toBeTruthy();
      expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1); */
  })
  
  
  
})
