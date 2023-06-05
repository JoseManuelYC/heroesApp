import { types } from "../../../src/auth"

describe('Pruebas en el types', () => {
  test('Debe de regresar ambos types', () => {
      expect(types).toEqual( { login: '[Auth] login', logout: '[Auth] logout' });
      expect(types).toEqual( { login: expect.any(String), logout: expect.any(String) });
  });
})
