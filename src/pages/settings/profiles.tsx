import Head from 'next/head'
import { MainLayout } from 'layouts'
import { IconEdit } from 'assets'
import {
  ButtonWithIcon,
  ModalEditProfile,
  Images,
  ViewNoData,
  ViewLoading,
} from 'components'
import { useState, useEffect } from 'react'
import { useGlobalContext } from 'contexts'
import { getProfileById } from 'services'
import { Profile } from 'types'
import { defaultProfile } from '../../constants'
import { useRouter } from 'next/router'

const PageProfile = () => {
  const [profile, setProfile] = useState<Profile>(defaultProfile)
  const [isLoading, setIsLoading] = useState(true)

  const { token, tokenDecoded } = useGlobalContext()
  const { query } = useRouter()

  const isEmpty = profile == defaultProfile

  const Content = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <SectionProfile profile={profile} />
  }

  useEffect(() => {
    const getDataProfile = async () => {
      const response = await getProfileById(token, tokenDecoded.id)
      setIsLoading(false)
      response?.status == 200
        ? setProfile(response.data.payload.data)
        : setProfile(defaultProfile)
    }
    getDataProfile()
  }, [token, tokenDecoded.id, query])

  return (
    <>
      <Head>
        <title>Profile | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title="Edit Profile"
        subTitle="Kamu dapat mengedit semua hal sesuai keinginan"
        buttonAction={
          <ModalEditProfile profile={profile}>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Edit profil"
                icon={<IconEdit className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalEditProfile>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

const SectionProfile = ({ profile }: { profile: Profile }) => {
  return (
    <div className="flex flex-col space-y-2.5 rounded-3xl bg-white shadow-modal-smooth">
      <div className="relative mb-12">
        <div className="absolute bottom-0 z-10 flex aspect-square translate-x-1/4 translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-200">
          <Images
            src={profile.avatar.url}
            alt={profile.avatar.name}
            fill={true}
            style={{ objectFit: 'cover' }}
            className="relative aspect-square h-24 overflow-hidden rounded-full bg-gray-200"
          />
        </div>
        <Images
          src={profile.thumbnail.url}
          alt={profile.thumbnail.name}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="relative aspect-[21/6] overflow-hidden rounded-t-3xl bg-gray-200"
        />
      </div>
      <div className="space-y-1 px-5 py-2.5">
        <h2 className="text-sm font-bold text-gray-900">{profile.fullName}</h2>
        <p className="text-sm text-gray-900">{profile.user.role.name}</p>
      </div>
      <div className="space-y-5 px-5 pb-10">
        <DisplayText label="Nama Lengkap :" field={profile.fullName} />
        <DisplayText label="Alamat Email :" field={profile.user.emailAddress} />
        <DisplayText label="Role :" field={profile.user.role.name} />
      </div>
    </div>
  )
}

const DisplayText = ({ label, field }: { label: string; field: string }) => {
  return (
    <div className="flex flex-col border-b border-gray-200">
      <p className="mb-2 text-sm font-semibold text-gray-900">{label}</p>
      <p className="mb-4 text-xs text-gray-500">{field}</p>
    </div>
  )
}

export default PageProfile
