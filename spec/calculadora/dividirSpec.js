describe("Suites de teste de Divisão",function () {
   var Calculadora = require('../../src/js/calculadora.js');

    it('Deve retorna 2 para 6 e 3',function () {
        expect(Calculadora.dividir(6,3)).toEqual(2);
   });
    it('Deve retorna 4 para 8 e 2 no formato texto',function () {
        expect(Calculadora.dividir('8','2')).toEqual(4);
    });
    it('Deve retorna 0.5 para  1 e 2',function () {
       expect(Calculadora.dividir(1,2)).toEqual(0.5);
    });
    it('Deve retornar "Erro" para divisão por 0',function () {
       expect(Calculadora.dividir(5,0)).toEqual('Erro');
    });
    it('Deve retornar 0 para valor 1 invalido',function () {
       expect(Calculadora.dividir(undefined, 20)).toEqual(0);
    });
    it('Deve retornar 0 para valor 2 invalido ',function () {
       expect(Calculadora.dividir(20, undefined)).toEqual(0);
    });
});