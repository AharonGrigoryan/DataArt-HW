// Define the car object type
type Car = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

// Input data
const cars: Car[] = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    price: 25000
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    color: "Red",
    price: 22000
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2023,
    color: "Blue",
    price: 35000
  }
];
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');
const resultElement = document.getElementById('result');

toggleButton.addEventListener('click', function () {
  if (content.style.display === 'none') {
    content.style.display = 'block';
    const pickedCars = pickFields(cars, pickedFields);
    const resultHtml = pickedCars.map(car => `<p>${car.make} ${car.model} - $${car.price}</p>`).join('');
    resultElement.innerHTML = resultHtml;

  } else {
    content.style.display = 'none';
  }
});
// Function to apply the Pick<> operator
function pickFields<T, K extends keyof T>(data: T[], fields: K[]): Pick<T, K>[] {
  return data.map(item => {
    const pickedItem: Pick<T, K> = {} as Pick<T, K>;
    for (const field of fields) {
      if (item.hasOwnProperty(field)) {
        pickedItem[field] = item[field];
      }
    }
    return pickedItem;
  });
}

// Specify the fields to pick
const pickedFields: Array<keyof Car> = ["make", "model", "price"];

// Apply the Pick<> operator on the cars data
const pickedCars = pickFields(cars, pickedFields);

// Output the result
console.log("###Pick###", pickedCars);



// Function to create a record of car information
function createCarRecord(make: string, model: string, year: number): Record<string, unknown> {
  return {
    make,
    model,
    year
  };
}

// Create a car record using the Record<> operator
const carRecord: Record<string, unknown> = createCarRecord("Toyota", "Camry", 2022);

// Output the result

console.log("###Record###", carRecord);


function createPartialCar(partialCar: Partial<Car>): Car {
  const car: Car = {
    make: partialCar.make || "Unknown",
    model: partialCar.model || "Unknown",
    year: partialCar.year || new Date().getFullYear(),
    color: partialCar.color || "Unknown",
    price: partialCar.price || 0
  };
  return car;
}

// Create a partial car object using the Partial<> operator
const partialCar: Partial<Car> = {
  make: "Toyota",
  model: "Camry"
};

// Create a complete car object from the partial car object
const completeCar: Car = createPartialCar(partialCar);

// Output the result
console.log("###Partial###", completeCar);




// Function to create a required car object
function createRequiredCar(requiredCar: Required<Car>): Car {
  const car: Car = {
    make: requiredCar.make || "Unknown",
    model: requiredCar.model || "Unknown",
    year: requiredCar.year || new Date().getFullYear(),
    color: requiredCar.color,
    price: requiredCar.price
  };
  return car;
}

// Create a required car object using the Required<> operator
const requiredCar: Required<Car> = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver",
  price: 25000
};

// Create a car object from the required car object
const car: Car = createRequiredCar(requiredCar);

// Output the result
console.log("###Required###", car);

