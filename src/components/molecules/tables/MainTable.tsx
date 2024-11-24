import { IconChevronLeft, IconChevronRight, IconSearch } from 'assets'
import { ButtonIcon } from 'components/atoms'
import { typeTable } from '.'
import { Metadata } from 'types'
import { useRouter } from 'next/router'
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  useState,
} from 'react'
import { clsxm } from 'helpers'

const ButtonSearch = () => (
  <div className="relative mb-5 ml-auto w-full max-w-xs">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <IconSearch className="aspect-square w-5 text-gray-500" />
    </div>
    <input
      type="search"
      id="search"
      className={clsxm(
        'block w-full bg-white px-4 py-3 pl-10 text-sm text-gray-900',
        'rounded-xl border border-gray-100',
        'transition-all duration-300',
        'focus:border-brand-200 focus:ring-4 focus:ring-brand-200'
      )}
      placeholder="Cari judul, kategori, atau lainnya"
    />
  </div>
)

const Pagination = ({ metadata }: { metadata?: Metadata }) => {
  const { push, query } = useRouter()

  const handleChangePage = (destination?: number | null) =>
    push({ query: { ...query, page: destination, perPage: metadata?.perPage } })

  const InputSelect = () => {
    const [isOpen, setIsOpen] = useState(false)

    const perPages = [10, 50, 100]

    const handleToggle = () => setIsOpen(!isOpen)

    const handleChangePerPage = (perPage: number) => {
      handleToggle()
      setTimeout(() => {
        push({ query: { ...query, page: metadata?.currentPage, perPage } })
      }, 300)
    }

    return (
      <div onClick={handleToggle} className="relative text-xs text-gray-500">
        <button
          className={clsxm(
            'flex items-center justify-between',
            'h-full rounded-xl p-3 outline-none',
            'border-gray-100 bg-gray-100',
            'hover:border-gray-200 hover:bg-gray-200',
            'focus:ring-4 focus:ring-gray-300',
            'transition-all duration-300'
          )}
        >
          {query.perPage || 10}
          <IconChevronLeft
            className={clsxm(
              'ml-2 aspect-square w-4',
              'transition-all duration-300',
              isOpen ? 'rotate-90' : 'rotate-[270deg]'
            )}
          />
        </button>
        <div
          className={clsxm(
            'absolute bottom-12 left-0 w-full',
            'overflow-hidden bg-white shadow-sm',
            'divide-y divide-gray-200',
            'rounded-xl border border-gray-200',
            'transition-all duration-300',
            !isOpen && 'translate-y-1/2 scale-0 opacity-0'
          )}
        >
          {perPages?.map((perPage, index) => (
            <button
              key={index}
              onClick={() => handleChangePerPage(perPage)}
              className={clsxm(
                'w-full px-3 py-2 hover:bg-gray-50',
                'transition-all duration-300'
              )}
            >
              {perPage}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-end gap-3 px-3 py-2">
      <InputSelect />
      <div
        className={clsxm(
          'mr-auto flex items-center justify-between',
          'h-full rounded-xl p-3',
          'text-xs text-gray-500',
          'border-gray-100 bg-gray-100'
        )}
      >
        Halaman {metadata?.currentPage || 1}
      </div>
      <ButtonIcon
        icon={<IconChevronLeft className="aspect-square w-4" />}
        size="xs"
        variant="gray-fill"
        disabled={!metadata?.prevPage}
        onClick={() => handleChangePage(metadata?.prevPage)}
      />
      <ButtonIcon
        icon={<IconChevronRight className="aspect-square w-4" />}
        size="xs"
        variant="gray-fill"
        disabled={!metadata?.nextPage}
        onClick={() => handleChangePage(metadata?.nextPage)}
      />
    </div>
  )
}

const MainTable = ({ children, search, pagination, metadata }: typeTable) => {
  return (
    <>
      {search && <ButtonSearch />}
      <div className="scrollbar overflow-x-auto rounded-xl bg-white shadow-modal-smooth md:overflow-visible">
        <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-t-xl text-left">
          {children}
        </table>
        {pagination && <Pagination metadata={metadata} />}
      </div>
    </>
  )
}

interface IHead
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {}

const Head: FC<IHead> = (props) => (
  <thead
    className={clsxm(
      'bg-brand-500 text-sm font-bold text-gray-50',
      props.className
    )}
    {...props}
  >
    {props.children}
  </thead>
)

interface ITr
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {}

const Tr: FC<ITr> = (props) => <tr {...props}>{props.children}</tr>

interface ITh
  extends DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  > {}

const Th: FC<ITh> = (props) => (
  <th className={clsxm('px-4 py-3 uppercase', props.className)}>
    {props.children}
  </th>
)

interface ITd
  extends DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {
  isCapitalize?: boolean
}

const Td: FC<ITd> = (props) => (
  <td
    className={clsxm(
      'border-b border-gray-50 px-4 py-3 align-top text-xs',
      props.isCapitalize && 'capitalize'
    )}
    {...props}
  >
    {props.children}
  </td>
)

interface IBody
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {}

const Body: FC<IBody> = (props) => (
  <tbody
    className={clsxm(
      'hover:[&>*]:bg-gray-50',
      'transition-all duration-300',
      props.className
    )}
    {...props}
  >
    {props.children}
  </tbody>
)

MainTable.Head = Head
MainTable.Body = Body
MainTable.Tr = Tr
MainTable.Th = Th
MainTable.Td = Td

export default MainTable
