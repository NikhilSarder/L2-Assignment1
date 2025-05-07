{
    //
    //Problem 1
    function formatString(input: string, toUpper: boolean = true): string {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
      }
      
      // Test Cases
      console.log(formatString("Hello"));          // Output: "HELLO"
      console.log(formatString("Hello", true));    // Output: "HELLO"
      console.log(formatString("Hello", false));   // Output: "hello"

      //Problem2
      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
      }
      
      // Test Case
      const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
      console.log(filterByRating(books));
      // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

      
      //Problem3
      function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((acc, curr) => acc.concat(curr), []);
      }
      
      
      // Test Cases
      console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
      console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]

      
      //Problem4
      class Vehicle {
        private make: string;
        private year: number;
      
        constructor(make: string, year: number) {
          this.make = make;
          this.year = year;
        }
      
        getInfo(): string {
          return `Make: ${this.make}, Year: ${this.year}`;
        }
      }
      
      class Car extends Vehicle {
        private model: string;
      
        constructor(make: string, year: number, model: string) {
          super(make, year);
          this.model = model;
        }
      
        getModel(): string {
          return `Model: ${this.model}`;
        }
      }
      
      // Test Case
      const myCar = new Car("Toyota", 2020, "Corolla");
      console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
      console.log(myCar.getModel());  // Output: "Model: Corolla"

      
      //Problem5
      function processValue(value: string | number): number {
        return typeof value === "string" ? value.length : value * 2;
      }
      
      // Test Cases
      console.log(processValue("hello")); // Output: 5
      console.log(processValue(10));      // Output: 20

      
      //Problem 6
      interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) return null;
      
        return products.reduce((max, product) => product.price > max.price ? product : max);
      }
      
      // Test Case
      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      console.log(getMostExpensiveProduct(products));
      // Output: { name: "Bag", price: 50 }

      
      //Problem 7
      enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
      }
      
      // Test Cases
      console.log(getDayType(Day.Monday));   // Output: "Weekday"
      console.log(getDayType(Day.Sunday));   // Output: "Weekend"

      
      //Problem 8
      async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Negative number not allowed"));
            } else {
              resolve(n * n);
            }
          }, 1000);
        });
      }
      
      // Test Cases
      squareAsync(4).then(console.log);        // Output after 1s: 16
      squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
      




    //
}