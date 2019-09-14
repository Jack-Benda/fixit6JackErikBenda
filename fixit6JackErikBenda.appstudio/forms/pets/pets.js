petNames = [
  "Darcy", "Jack", "Jerry", "Marty", "Vito", 
  "Vinny", "Riley", "Saddie", "Marge", "Sam"
  ];

#g.
withMarmaduke = petNames
withMarmaduke.push("Marmaduke")
console.log(petNames)

# a.
petNames.splice(petNames.indexOf("Vinny"),1)
console.log(petNames)

# b.
petNames.splice(petNames.indexOf("Marty"),1)
console.log(petNames)

# c.
petNames.unshift("Nancy")
console.log(petNames)

# d. 
petNames.shift("Erik")
console.log(petNames)

console.log(petNames.indexOf("Riley"))

# f.
console.log(petNames.indexOf("Cindy"))

removedItem = petNames.shift()
console.log(removedItem)

petNames.shift("Barney")
console.log(petNames.unshift())

allPets = petNames.concat('Ted','Fred','Jed','Ned','Ed','Zed')
console.log(allPets)

console.log(allPets.shift())