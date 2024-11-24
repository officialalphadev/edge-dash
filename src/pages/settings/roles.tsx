import Head from 'next/head'
import { MainLayout } from 'layouts'
import {
  ButtonWithIcon,
  ModalAddRole,
  TableRole,
  ViewLoading,
  ViewNoData,
} from 'components'
import { IconAdd } from 'assets'
import { FC, useEffect, useState } from 'react'
import { Metadata, Role } from 'types'
import { getRoles } from 'services'
import { useGlobalContext } from 'contexts'
import { defaultMetadata } from '../../constants'
import { useRouter } from 'next/router'

const PageRole: FC = () => {
  const [roles, setRoles] = useState<Role[]>([])
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata)
  const [isLoading, setIsLoading] = useState(true)

  const { token } = useGlobalContext()
  const { query } = useRouter()

  const isEmpty = roles.length == 0

  const Content: FC = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <ViewNoData />
    return <TableRole roles={roles} metadata={metadata} />
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getRoles(
        token,
        Number(query.page) || 1,
        Number(query.perPage) || 10
      )
      setIsLoading(false)
      if (response?.status == 200) {
        setRoles(response.data.payload.data.rolesData)
        setMetadata(response.data.payload.data.metadata)
      } else {
        setRoles([])
        setMetadata(defaultMetadata)
      }
    }
    getData()
  }, [query, token])

  return (
    <>
      <Head>
        <title>Role | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title="Role Pengguna"
        subTitle="Kamu dapat mengubah dan menambahkan role pada Dashboard Alphadev"
        buttonAction={
          <ModalAddRole>
            {({ openModal }) => (
              <ButtonWithIcon
                text="Tambahkan role"
                icon={<IconAdd className="aspect-square w-5" />}
                onClick={openModal}
              />
            )}
          </ModalAddRole>
        }
      >
        <Content />
      </MainLayout>
    </>
  )
}

export default PageRole
