import { IconAdd } from 'assets'
import {
  ButtonWithIcon,
  ModalAddUser,
  TableUser,
  ViewLoading,
  ViewNoData,
} from 'components'
import { defaultMetadata } from '../../constants'
import { useGlobalContext } from 'contexts'
import { MainLayout } from 'layouts'
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import { getUsers } from 'services'
import { Metadata, User } from 'types'
import { useRouter } from 'next/router'

const PageUser: FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useGlobalContext()
  const { query } = useRouter()

  const isEmpty = users.length == 0

  const Content: FC = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <TableUser users={users} metadata={metadata} />
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getUsers(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status == 200) {
        setUsers(response.data.payload.data.usersData)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setUsers([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Pengguna | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title="Pengguna"
        subTitle="Semua pengguna pada Dashboard Alphadev"
        buttonAction={
          <ModalAddUser>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Tambahkan pengguna"
                icon={<IconAdd className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalAddUser>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageUser
