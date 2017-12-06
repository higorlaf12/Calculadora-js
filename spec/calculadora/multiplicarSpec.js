describe('Suite de teste para multiplicação',function () {
    var Calculadora = require('../../src/js/calculadora.js');

    it('Deve retorna 25 para  5 e 5',function () {
        expect(Calculadora.multiplicar(5,5)).toEqual(25);
    });
    it('Deve retorna 35 para 7 e 5 no formato de texto',function () {
        expect(Calculadora.multiplicar('7','5')).toEqual(35);
    });
    it('Deve retorna 5 para 2 e  2.5',function () {
        expect(Calculadora.multiplicar(2,2.5)).toEqual(5);
    });
    it('Deve retorna 0 para valor 1 invalido',function () {
       expect(Calculadora.multiplicar(undefined, 56)).toEqual(0);
    });
    it('Deve retorna 0 para valor 2 invalido',function () {
        expect(Calculadora.multiplicar(52, undefined)).toEqual(0);
    });
});