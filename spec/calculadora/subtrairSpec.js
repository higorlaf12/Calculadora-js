describe("Suite de teste de subtração",function () {

    var Calculadora = require('../../src/js/calculadora.js');
    
    it('Deve subtrarir 3 para 5 e 2',function () {
       expect(Calculadora.subtrair(5,2)).toEqual(3);
    });
    it('Deve retornar 4 para 8 e 4 no formato texto',function () {
        expect(Calculadora.subtrair('8','4')).toEqual(4);
    });
    it('Deve retorna 4 para 5.5 e 1.5',function () {
       expect(Calculadora.subtrair(5.5,1.5)).toEqual(4);
    });
    it('Deve retornar 0 para valor 1 invalido ',function () {
       expect(Calculadora.subtrair(undefined, 1)).toEqual(0);
    });
    it('Deve retornar 0 para valor 2 invalido ',function () {
        expect(Calculadora.subtrair(5,undefined)).toEqual(0);
    });
});