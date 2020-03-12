const _users = [
  {
    "address": {
      "city": "Los Angeles",
      "state": "California",
      "pincode": "123"
    },
    "tags": [
      "music",
      "blog",
      "cricket"
    ],
    "name": "Tom Benzamin"
  },
  {
    "address": {
      "city": "赣州",
      "state": "江西",
      "pincode": "341000"
    },
    "tags": [
      "coding",
      "blogs",
      "cricket"
    ],
    "name": "Horace"
  },
  {
    "address": {
      "city": "九江",
      "state": "江西",
      "pincode": "341000"
    },
    "tags": [
      "coding",
      "swim"
    ],
    "name": "Tracy"
  },
  {
    "address": {
      "city": "赣州",
      "state": "江西",
      "pincode": "341000"
    },
    "tags": [
      "coding",
      "games"
    ],
    "name": "Nally"
  }
]

export default {
  getUsers(cb) {
    setTimeout(() => {
      cb(_users)
    }, 1000)
  }
}