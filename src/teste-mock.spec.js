import Car from './car'
import People from './people'

jest.mock('./people', () => {
    return jest.fn().mockImplementation(() => {
        return {
                putSeatBelt: jest.fn().mockReturnValue('mock1'), 
                name:"Jacinto"
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
})