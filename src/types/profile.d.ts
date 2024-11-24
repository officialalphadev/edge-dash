declare interface Profile {
  profileId: string
  fullName: string
  avatar: { id: string; name: string; url: string }
  thumbnail: { id: string; name: string; url: string }
  updatedAt: string
  user: {
    emailAddress: string
    role: {
      name: string
      description: string
      permissions: {
        read: string[]
        write: string[]
        delete: string[]
        update: string[]
      }
    }
  }
}

export default Profile
