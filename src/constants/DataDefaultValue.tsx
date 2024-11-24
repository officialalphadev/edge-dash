import { Profile, UserInfo } from 'types'

export const defaultProfile: Profile = {
  profileId: '',
  fullName: '',
  avatar: { id: '', name: '', url: '' },
  thumbnail: { id: '', name: '', url: '' },
  updatedAt: '',
  user: {
    emailAddress: '',
    role: {
      name: '',
      description: '',
      permissions: { read: [], write: [], delete: [], update: [] },
    },
  },
}

export const defaultUserInfo: UserInfo = {
  userId: '',
  role: {
    roleId: '',
    name: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  },
  emailAddress: '',
  profile: {
    userId: '',
    fullName: '',
    profileId: '',
    avatar: '',
    avatarName: '',
    thumbnail: '',
    thumbnailName: '',
    updatedAt: '',
  },
}

export const defaultRole = {
  roleId: '',
  name: '',
  description: '',
  permissions: {
    read: [],
    write: [],
    update: [],
    delete: [],
  },
  createdAt: '',
  updatedAt: '',
}

export const defaultSubscriber = {
  subscriber_id: '',
  firstName: '',
  lastName: '',
  email: '',
  createdAt: '',
  updatedAt: '',
}

export const defaultUser = {
  userId: '',
  roleId: '',
  emailAddress: '',
  registeredAt: '',
  profile: { fullName: '' },
  role: { name: '' },
}

export const defaultSelectedPortfolioCategory = {
  id: '',
  name: '',
  slug: '',
  createdAt: '',
  updatedAt: '',
}

export const defaultMetadata = {
  totalItems: 0,
  totalPages: 0,
  perPage: 0,
  nextPage: null,
  currentPage: 0,
  prevPage: null,
}
