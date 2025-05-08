1. Differences Between any, unknown, and never Types
TypeScript helps ensure type safety. However, some types—if not properly understood—can increase the chance of bugs. Let's look at the key differences between any, unknown, and never.

any Type
Can hold values of any type.

TypeScript does not perform type checking on it.
unknown Type
Like any, it can hold values of any type.

But it requires a type check before usage, making it safer than any.
never Type
Used for functions that never return a value.

Commonly used when a function throws an error or runs infinitely.

Union Type (|)
A variable can hold values of multiple types.
function printId(id: number | string): void {
  console.log("Your ID is: " + id);
}

printId(101);
printId("abc123");
In the example above, the id can be either a number or a string.
Intersection Type (&)
Combines two or more types into a new type that includes all properties.
type Person = { name: string };
type Worker = { jobTitle: string };

type Employee = Person & Worker;

const emp: Employee = {
  name: "Rahim",
  jobTitle: "Developer"
};
Here, the Employee type combines both Person and Worker.
