const users = [
    {firstName: "Oleksii", lastName: "Haiduk", mobilePhone: "380500000000", age: "33"},
    {firstName: "Toha", lastName: "Boss", mobilePhone: "380500000001", age: "33"},
    {firstName: "Jira", lastName: "Board", mobilePhone: "380500000002", age: "100"}
];

for (let user of users) {
    let {firstName, lastName, age} = user;

    console.log(`Name: ${firstName}, Surname: ${lastName}, Age: ${age}`);
}