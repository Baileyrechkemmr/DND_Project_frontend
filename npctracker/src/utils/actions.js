import dogs from './data.json'

// function to get all dogs
export const getDogs = () => dogs

// function create a dog
export const createDog = (newDog) => dogs.push(newDog)

// update a dog
export const updateDog = (updatedDog, index) => {
	dogs[index] = updatedDog
	return dogs[index]
}

// delete a dog
export const destroyDog = (index) => {
	return dogs.splice(index, 1)
}
