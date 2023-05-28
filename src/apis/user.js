const ALL_USERS = [
    {
        id: 1,
        name: "Nong Van Cuong",
        age: 22,
    },
    {
        id: 2,
        name: "Ma Huy Hoang",
        age: 17,
    },
    {
        id: 3,
        name: "Nong The Cong",
        age: 27,
    },
    {
        id: 4,
        name: "Nguyen Tien Dung",
        age: 24,
    },
    {
        id: 5,
        name: "Hoang Hai Yen",
        age: 21,
    },
];

function fetchUsers() {
    return ALL_USERS;
}

function findUserById(id) {
    return Promise.resolve(ALL_USERS.find((user) => user.id === id));
}

module.exports = {
    fetchUsers,
    findUserById,
};
