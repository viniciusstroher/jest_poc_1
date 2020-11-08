import Car from './car'
import People from './people'
import express from "express"

jest.resetModules()

//precisa user mock<NomedoMock<
const mockOutFit = {
    dressOut: jest.fn().mockReturnValue('fiquei peladao'), 
    name:"sem roupaaaa = ("
}

jest.mock('./outfit', () => {
    return jest.fn().mockImplementation(() => {
        return mockOutFit;
    });
});

export const Class1Mock = jest.fn(() => { 
    return {
        constructor: jest.fn(),
        play: jest.fn().mockImplementation(() => true)
    }
})

const implementationListenReturn = "express mocked - nao vai subir ninguem"

// jest.mock("express", () => ({
//     //aqui pode deixar todo o metodo e chamr jest.requireActual("express") se precisar da implementaão
//     //original do express
//     // ...jest.requireActual("express"),
    // listen: jest.fn().mockImplementation(() => implementationListenReturn),
    // metodoDeTeste: jest.fn()
// }));

jest.mock("express",() => {
    return jest.fn().mockImplementation(() => {
        return {
            ...jest.requireActual("express"), // usa o resto da implementaão do framework do express
            listen: jest.fn().mockImplementation(() => implementationListenReturn),
            metodoDeTeste: jest.fn()
        };
    });
})

describe('teste de mocks', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        //disable console.log
        jest.spyOn(console, 'log').mockImplementation(() => {});

    })

    test('teste mock 1 - jest mockImplementation', () => {
        const newOutFit = require('./outfit')
        newOutFit()
    })

    test('teste mock 2 - test mocked class', () => {
        expect(new Class1Mock().play()).toBe(true)
    })

    test('teste mock 3 - use original express, test if mock method not have metodoDeTeste', () => {

        const expressOriginal = jest.requireActual('express'); // usa a implementaão original, e test se nao tem o metodo do mock metodoDeTeste
        const app = expressOriginal()
        console.log(app)
        expect(typeof app.metodoDeTeste).toBe("undefined")
    })

    test('teste mock 4 - mock only one method from external lib', () => {
        const app = express()
        expect(app.listen()).toBe(implementationListenReturn)
    })

})