import axios from "axios";

const testRoles = {
  1: 'admin',
  2: 'intern',
  3: 'trainee',
  4: 'mentor',
  5: 'tutor',
  6: 'hr',
}

const UsersService = {
  async getAll() {
    const response = await axios.get();
    return response.data;
  },
  async logIn(data) {
    return {
      user: {
        name: 'John',
        surname: 'Doe',
        role: testRoles[data.nickname],
      }
    }
  }
}

export default UsersService;