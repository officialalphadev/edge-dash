import { IconDelete, IconEdit, IconView } from 'assets'
import { clsxm } from 'helpers'

type typeButtonAction = {
  onClick?: () => void
  type: 'edit' | 'delete' | 'detail'
}

const ButtonAction = ({ onClick, type }: typeButtonAction) => {
  return (
    <button
      onClick={onClick}
      className={clsxm(
        'rounded-xl bg-brand-50 p-1.5',
        'hover:ring-4',
        'hover:ring-brand-100',
        'transition-all duration-300'
      )}
      title={type == 'edit' ? 'Ubah' : 'Hapus'}
    >
      {type == 'edit' && (
        <IconEdit className="aspect-square w-5 text-brand-500" />
      )}
      {type == 'delete' && (
        <IconDelete className="aspect-square w-5 text-brand-500" />
      )}
      {type == 'detail' && (
        <IconView className="aspect-square w-5 text-brand-500" />
      )}
    </button>
  )
}

export default ButtonAction
