declare interface Role {
  roleId: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

declare interface Profile {
  profileId: string
  userId: string
  fullName: string
  avatar: string
  avatarName: string
  thumbnail: string
  thumbnailName: string
  updatedAt: string
}

declare interface UserInfo {
  userId: string;
  emailAddress: string;
  profile: Profile,
  role: Role
}

export default UserInfo;