import Car from './car'
import People from './people'

const newPeople = new People('vini')
const newCar = new Car('fusca', 10000000, newPeople)

newCar.start()