import { useRouter } from 'next/router'
import Flashsale from 'types/flashsale'
import MainTable from './MainTable'
import { formatDate, numbering } from 'helpers'
import { ButtonAction } from 'components/atoms'
import { Metadata } from 'types'
import { FC } from 'react'
import { ModalDeleteFlashsale } from '../modals'

interface ITableFlashsale {
  flashsales: Flashsale[]
  metadata: Metadata
}

const TableFlashsale: FC<ITableFlashsale> = ({ flashsales, metadata }) => {
  const headers = ['No', 'Judul', 'Deskripsi', 'Mulai', 'Berakhir', 'Aksi']

  const { push } = useRouter()

  const handleEdit = (id: string) =>
    push({ pathname: '/events/flashsales/edit', query: { id } })

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
        {flashsales.map((flashsale, index) => (
          <MainTable.Tr key={flashsale.id}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td title={flashsale.name}>{flashsale.name}</MainTable.Td>
            <MainTable.Td>{flashsale.description}</MainTable.Td>
            <MainTable.Td>{formatDate(flashsale.start_date)}</MainTable.Td>
            <MainTable.Td>{formatDate(flashsale.end_date)}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center space-x-2.5">
                <ButtonAction
                  type="edit"
                  onClick={() => handleEdit(flashsale.id)}
                />
                <ModalDeleteFlashsale flashsale={flashsale}>
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeleteFlashsale>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TableFlashsale
