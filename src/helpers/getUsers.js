export const getUsers = async () => {
  const url = `https://randomuser.me/api/?results=9`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const users = results.map((user) => ({
    id: user.login.uuid,
    gender: user.gender,
    image: user.picture.medium,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    date: user.dob.date,
    age: user.dob.age,
    hotel: `Hotel ${user.dob.age}`,
    status: user.id.value,
  }));

  return users;
};
