import Car from './car'
import People from './people'
import Outfit from './outfit'

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

describe('teste de mocks', () => {
    test('teste mock 1 ', () => {
        const newPeopleTest = new People('dummy test')
        console.log('Retorno putSeatBelt mock - ', newPeopleTest.putSeatBelt())
        console.log('Retorno people mock - ', newPeopleTest.name)
        const newCar = new Car('a',1, newPeopleTest)
        newCar.start()
    })

    test('teste mock 2 ', () => {
        const newOutfit = new Outfit('roupa')
        console.log(newOutfit.dressOut())
    })
})