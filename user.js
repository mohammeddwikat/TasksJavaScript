class User {
  constructor(
    id,
    first_name,
    last_name,
    email,
    gender,
    ip_address,
    color,
    parentId
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.ip_address = ip_address;
    this.ip_address = ip_address;
    this.color = color;
    this.parentId = parentId;
  }
}

module.exports = { User };
