import { IconMenu } from 'assets'
import { useGlobalContext } from 'contexts'
import { clsxm } from 'helpers'

const ButtonMenu = () => {
  const { setSidebar } = useGlobalContext()

  const toogleSidebar = () => {
    setSidebar((sidebar) => {
      localStorage.setItem('sidebar', JSON.stringify(!sidebar))
      return !sidebar
    })
  }

  return (
    <button
      onClick={toogleSidebar}
      className={clsxm(
        'relative flex h-fit rounded-xl bg-white p-3 text-gray-700',
        'focus:ring-4 focus:ring-gray-300',
        'transition-all duration-300'
      )}
    >
      <IconMenu className="aspect-square w-6" />
    </button>
  )
}

export default ButtonMenu
