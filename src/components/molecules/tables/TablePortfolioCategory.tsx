import { numbering } from 'helpers'
import MainTable from './MainTable'
import {
  ModalDeletePortfolioCategory,
  ModalEditPortfolioCategory,
} from '../modals'
import { ButtonAction } from 'components/atoms'
import { Metadata, PortfolioCategory } from 'types'
import { FC } from 'react'

interface ITablePortfolioCategory {
  portfolioCategories: PortfolioCategory[]
  metadata: Metadata
}

const TablePortfolioCategory: FC<ITablePortfolioCategory> = ({
  portfolioCategories,
  metadata,
}) => {
  const headers = ['No', 'Nama Kategori', 'Aksi']

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
        {portfolioCategories.map((portfolioCategory, index) => (
          <MainTable.Tr key={portfolioCategory.id}>
            <MainTable.Td>{numbering(index)}</MainTable.Td>
            <MainTable.Td>{portfolioCategory.name}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center space-x-2.5">
                <ModalDeletePortfolioCategory
                  portfolioCategory={portfolioCategory}
                >
                  {({ openModal }) => (
                    <ButtonAction type="delete" onClick={openModal} />
                  )}
                </ModalDeletePortfolioCategory>
                <ModalEditPortfolioCategory
                  portfolioCategory={portfolioCategory}
                >
                  {({ openModal }) => (
                    <ButtonAction type="edit" onClick={openModal} />
                  )}
                </ModalEditPortfolioCategory>
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TablePortfolioCategory
