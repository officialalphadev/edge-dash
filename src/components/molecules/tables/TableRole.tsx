import { FC } from 'react'
import { Metadata, Role } from 'types'
import MainTable from './MainTable'
import { numbering } from 'helpers'
import { ModalDeleteRole, ModalEditRole } from '../modals'
import { ButtonAction } from 'components/atoms'

interface TableRoleProps {
  roles: Role[]
  metadata: Metadata
}

const TableRole: FC<TableRoleProps> = ({ roles, metadata }) => {
  const headers = ['No', 'Nama', 'Deskripsi', 'Aksi']

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
        {roles.map((role, index) => (
          <MainTable.Tr key={role.roleId}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td>{role.name}</MainTable.Td>
            <MainTable.Td>{role.description}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center gap-2.5">
                <ModalDeleteRole role={role}>
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeleteRole>
                <ModalEditRole role={role}>
                  {({ openModal }) => (
                    <ButtonAction type="edit" onClick={openModal} />
                  )}
                </ModalEditRole>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TableRole
