declare interface Role {
  roleId: string
  name: string
  description: string
  permissions: {
    read: string[]
    write: string[]
    update: string[]
    delete: string[]
  }
  createdAt: string
  updatedAt: string
}

export default Role
