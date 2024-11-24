import { BadgeStatus, ButtonAction } from 'components/atoms'
import { MainTable } from 'components/molecules'

const TableExample = ({
  search = false,
  pagination = false,
}: {
  search?: boolean
  pagination?: boolean
}) => {
  const headers = [
    'Judul',
    'Thumbnail',
    'Mulai',
    'Berakhir',
    'Kategori',
    'Status',
    'Tugas',
    'Aksi',
  ]

  const datas = [
    {
      title: 'Logo Company',
      imageUrl: 'Image Url',
      startDate: '28 Mar 2023',
      endDate: '04 Apr 2023',
      category: 'Logo Termurah',
      status: 'ongoing',
      person: 'Shofi',
    },
    {
      title: 'Buat Web Design',
      imageUrl: 'Image Url',
      startDate: '28 Mar 2023',
      endDate: '04 Apr 2023',
      category: 'Web Design',
      status: 'finish',
      person: 'Rizky',
    },
  ]

  return (
    <MainTable search={search} pagination={pagination}>
      <MainTable.Head>
        <MainTable.Tr>
          {headers.map((header) => (
            <MainTable.Th key={header}>{header}</MainTable.Th>
          ))}
        </MainTable.Tr>
      </MainTable.Head>
      <MainTable.Body>
        {datas.map((data) => (
          <MainTable.Tr key={data.title}>
            <MainTable.Td title={data.title}>
              {data.title.slice(0, 10) + '...'}
            </MainTable.Td>
            <MainTable.Td>
              <div className="aspect-square w-11 rounded bg-gray-200" />
            </MainTable.Td>
            <MainTable.Td>{data.startDate}</MainTable.Td>
            <MainTable.Td>{data.endDate}</MainTable.Td>
            <MainTable.Td>{data.category}</MainTable.Td>
            <MainTable.Td>
              <BadgeStatus text={data.status} />
            </MainTable.Td>
            <MainTable.Td>{data.person}</MainTable.Td>
            <MainTable.Td>
              <div className="flex items-center justify-center space-x-2.5">
                <ButtonAction type="delete" />
                <ButtonAction type="edit" />
              </div>
            </MainTable.Td>
          </MainTable.Tr>
        ))}
      </MainTable.Body>
    </MainTable>
  )
}

export default TableExample
