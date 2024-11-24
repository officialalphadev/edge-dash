import { Metadata, Subscriber } from 'types'
import MainTable from './MainTable'
import { formatDate, numbering } from 'helpers'
import { ModalDeleteSubscriber } from '../modals'
import { ButtonAction } from 'components/atoms'
import { FC } from 'react'

interface ITableSubscriber {
  subscribers: Subscriber[]
  metadata: Metadata
}

const TableSubscriber: FC<ITableSubscriber> = ({ subscribers, metadata }) => {
  const headers = ['No', 'Email', 'Tanggal', 'Aksi']

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
        {subscribers.map((subscriber, index) => (
          <MainTable.Tr key={subscriber.subscriber_id}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td>{subscriber.email}</MainTable.Td>
            <MainTable.Td>{formatDate(subscriber.createdAt)}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center gap-2.5">
                <ModalDeleteSubscriber subscriber={subscriber}>
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeleteSubscriber>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TableSubscriber
