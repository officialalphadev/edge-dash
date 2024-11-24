import { FC } from 'react'
import { Metadata, User } from 'types'
import MainTable from './MainTable'
import { formatDate, numbering } from 'helpers'
import { ModalDeleteUser, ModalEditUser } from '../modals'
import { ButtonAction } from 'components/atoms'

interface TableUserProps {
  users: User[]
  metadata: Metadata
}

const TableUser: FC<TableUserProps> = ({ users, metadata }) => {
  const headers = ['No', 'Nama', 'Email', 'Role', 'Dibuat', 'Aksi']

  return (
    <MainTable metadata={metadata} pagination>
      <MainTable.Head>
        <MainTable.Tr>
          {headers.map((header) => (
            <MainTable.Th key={header}>{header}</MainTable.Th>
          ))}
        </MainTable.Tr>
      </MainTable.Head>
      <MainTable.Body>
        {users.map((user, index) => (
          <MainTable.Tr key={user.userId}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td>{user.profile.fullName}</MainTable.Td>
            <MainTable.Td>{user.emailAddress}</MainTable.Td>
            <MainTable.Td>{user.role.name}</MainTable.Td>
            <MainTable.Td>{formatDate(user.registeredAt)}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center gap-2.5">
                <ModalDeleteUser user={user}>
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeleteUser>
                <ModalEditUser user={user}>
                  {({ openModal }) => (
                    <ButtonAction type="edit" onClick={openModal} />
                  )}
                </ModalEditUser>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TableUser
