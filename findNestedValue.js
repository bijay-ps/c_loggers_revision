function findNestedValue(obj, propertyPath) {
  //propertyPath = "person.name"
  const pathArray = propertyPath.split("."); // ["person", "name"]
  let result = obj;

  for (let property of pathArray) {
    if (result && typeof result === "object" && property in result) {
      result = result[property];
    } else {
      return null;
    }
  }

  return result;
}

console.log(
  findNestedValue(
    {
      person: {
        name: "John",
        age: 30,
        address: { city: "New York", country: "USA" },
      },
    },
    "person.name"
  )
);
