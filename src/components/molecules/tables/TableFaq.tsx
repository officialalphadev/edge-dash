import { FC } from 'react'
import { Faq, Metadata } from 'types'
import MainTable from './MainTable'
import { ButtonAction } from 'components/atoms'
import { numbering } from 'helpers'
import { ModalDeleteFaq, ModalEditFaq } from '../modals'

interface ITableFaq {
  faqs: Faq[]
  metadata: Metadata
}

const TableFaq: FC<ITableFaq> = ({ faqs, metadata }) => {
  const headers = ['No', 'Judul', 'Deskripsi', 'Aksi']

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
        {faqs.map((faq, index) => (
          <MainTable.Tr key={faq.id}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td>{faq.title}</MainTable.Td>
            <MainTable.Td>{faq.description}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center gap-3">
                <ModalEditFaq faq={faq}>
                  {({ openModal }) => (
                    <ButtonAction type="edit" onClick={openModal} />
                  )}
                </ModalEditFaq>
                <ModalDeleteFaq faq={faq}>
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeleteFaq>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TableFaq
