import { authReducer, types } from "../../../src/auth";

describe('Pruebas en el authReducer', () => {

  const initialState = {
  id: 'ABC',
  name: 'Superman',
  }
  test('Debe retornar el estado por defecto ', () => {
    const newState = authReducer(initialState,{});
    expect(newState).toBe(initialState);
  });
  test('Debe de llamar al login, autenticar, y establecer el usuario', () => {
    const action = {
      type:types.login,
      payload: initialState
    }
    const stateLogin = authReducer({},action);
    expect(stateLogin).toEqual({ logged: true, user: { id: 'ABC', name: 'Superman' } });
  })
  test('Debe de llamar al logout, borrar el usuario y logged en false ', () => {
    const action = {
      type:types.logout,
    }
    const stateLogout = authReducer(initialState,action);
    expect(stateLogout).toEqual({logged:false});

  })
  
  
})
