import { TypeDataMenu } from '.'
import {
  IconEvent,
  IconFaq,
  IconFlashsale,
  IconHome,
  IconMedia,
  IconNewsletter,
  IconPortfolio,
  IconProfile,
  IconRole,
  IconSetting,
  IconUsers,
} from '../assets'

const DataMenu: TypeDataMenu[] = [
  {
    href: '/',
    name: 'Beranda',
    icon: <IconHome className={`h-6 w-6 flex-none`} />,
  },
  {
    href: '/medias',
    name: 'Media',
    icon: <IconMedia className={`h-6 w-6 flex-none`} />,
  },
  {
    href: 'events',
    name: 'Event',
    icon: <IconEvent className={`h-6 w-6 flex-none`} />,
    items: [
      {
        href: '/events/flashsales',
        name: 'Flash Sale',
        icon: <IconFlashsale className={`h-6 w-6 flex-none`} />,
      },
      {
        href: '/events/newsletters',
        name: 'Newsletter',
        icon: <IconNewsletter className={`h-6 w-6 flex-none`} />,
      },
      {
        href: '/events/subscribers',
        name: 'Subscriber',
        icon: <IconUsers className={`h-6 w-6 flex-none`} />,
      },
    ],
  },
  {
    href: '/portfolios',
    name: 'Portofolio',
    icon: <IconPortfolio className={`h-6 w-6 flex-none`} />,
  },
  {
    href: '/faqs',
    name: 'FAQ',
    icon: <IconFaq className={`h-6 w-6 flex-none`} />,
  },
  {
    href: 'settings',
    name: 'Pengaturan',
    icon: <IconSetting className={`h-6 w-6 flex-none`} />,
    items: [
      {
        href: '/settings/profiles',
        name: 'Profil',
        icon: <IconProfile className={`h-6 w-6 flex-none`} />,
      },
      {
        href: '/settings/users',
        name: 'Pengguna',
        icon: <IconUsers className={`h-6 w-6 flex-none`} />,
      },
      {
        href: '/settings/roles',
        name: 'Role',
        icon: <IconRole className={`h-6 w-6 flex-none`} />,
      },
    ],
  },
]

export default DataMenu
