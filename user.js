class User {
  constructor(
    id,
    firstName,
    lastName,
    email,
    gender,
    ipAddress,
    color,
    parentId
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.ipAddress = ipAddress;
    this.color = color;
    this.parentId = parentId;
  }
}

module.exports = { User };
