import Car from './car'
import People from './people'
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

describe('teste de mocks', () => {
    // beforeEach(() => {
    //     jest.clearAllMocks()
    // })

    test('teste mock 1 - jest mockImplementation', () => {
        const newPeopleTest = new People('dummy test')
        console.log('Retorno putSeatBelt mock - ', newPeopleTest.putSeatBelt())
        console.log('Retorno people mock - ', newPeopleTest.name)
        const newCar = new Car('a',1, newPeopleTest)
        newCar.start()
    })

})