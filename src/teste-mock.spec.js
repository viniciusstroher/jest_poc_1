import Car from './car'
import People from './people'
import Outfit from './outfit'
import ErrorExample from './error-example'
import {ErrorExample2, MyError} from './error-example-custom-throw-class'
import async from './async'
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

const outfit = new Outfit('roupa')
jest.mock('./people', () => {
    return jest.fn().mockImplementation(() => {
        return {
                putSeatBelt: jest.fn().mockReturnValue('mock1'), 
                name:"Jacinto",
                outfit: mockOutFit
            };
    });
});

const asyncMock = jest.fn().mockResolvedValue(43);

jest.mock('./async', () => jest.fn().mockResolvedValueOnce(false).mockResolvedValue(true));
// jest.clearAllMocks()

describe('teste de mocks', () => {
    
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('teste mock 1 - jest mockImplementation', () => {
        const newPeopleTest = new People('dummy test')
        // console.log('Retorno putSeatBelt mock - ', newPeopleTest.putSeatBelt())
        // console.log('Retorno people mock - ', newPeopleTest.name)
        const newCar = new Car('a',1, newPeopleTest)
        newCar.start()
    })

    test('teste mock 2 ', () => {
        const newOutfit = new Outfit('roupa')
        // console.log(newOutfit.dressOut())
    })

    test('teste mock 3  - exception - teste throw no metodo', () => {
        expect(() => new ErrorExample()).toThrow(Error)
    })

    test('teste mock 4 - test return false mocked async', () => {
        expect(async()).resolves.toBe(false)
    })

    // test('teste mock 5 - test return true mocked async', () => {
    //     expect(async()).resolves.toBe(true)
    // })

    // test('teste mock 6 - test 2 return true mocked async', () => {
    //     expect(async()).resolves.toBe(true)
    // })
})