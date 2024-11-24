import { useRouter } from 'next/router'
import { FC } from 'react'
import { Metadata, Portfolio } from 'types'
import MainTable from './MainTable'
import { numbering } from 'helpers'
import { ButtonAction, Images } from 'components/atoms'
import { ModalDeletePortfolio } from '../modals'

interface ITablePortfolio {
  portfolios: Portfolio[]
  metadata: Metadata
}

const TablePortfolio: FC<ITablePortfolio> = ({ portfolios, metadata }) => {
  const headers = ['No', 'Judul', 'Thumbnail', 'Deskripsi', 'Kategori', 'Aksi']

  const { push } = useRouter()

  const handleEdit = (id: string) =>
    push({ pathname: '/portfolios/edit', query: { id } })

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
        {portfolios.map((portfolio, index) => (
          <MainTable.Tr key={portfolio.id}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td>{portfolio.title}</MainTable.Td>
            <MainTable.Td>
              <Images
                src={portfolio.thumbnail.url}
                alt={portfolio.thumbnail.id}
                style={{ objectFit: 'cover' }}
                className="relative aspect-video w-16 overflow-hidden rounded bg-gray-200"
                fill
              />
            </MainTable.Td>
            <MainTable.Td>{portfolio.description}</MainTable.Td>
            <MainTable.Td>{portfolio.category.name}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center gap-3">
                <ButtonAction
                  type="edit"
                  onClick={() => handleEdit(portfolio.id)}
                />
                <ModalDeletePortfolio portfolio={portfolio}>
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeletePortfolio>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TablePortfolio
