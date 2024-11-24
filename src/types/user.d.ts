declare interface User {
  userId: string
  roleId: string
  emailAddress: string
  registeredAt: string
  profile: {
    fullName: string
  }
  role: {
    name: string
  }
}

export default User
