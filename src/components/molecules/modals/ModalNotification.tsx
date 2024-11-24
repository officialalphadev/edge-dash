import {
  IconChevronRight,
  IconClose,
  IconNotification,
  IconTime,
  IconUser,
  NoNotification,
} from 'assets'
import { SideModal } from '.'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Images } from 'components/atoms'
import { getActivities } from 'services'
import { useGlobalContext } from 'contexts'
import { ViewLoading } from 'components/organisms'
import { Activity } from 'types'
import { formatDate, formatTime } from 'helpers'

export type typeModalNotification = {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const ModalNotification = ({ show, setShow }: typeModalNotification) => {
  const [isLoading, setIsLoading] = useState(true)
  const [activities, setActivities] = useState<{ [key: string]: Activity[] }>(
    {}
  )

  const { token } = useGlobalContext()

  const isEmpty = Object.keys(activities).length == 0

  const handleClose = () => setShow(false)

  const Content = () => {
    if (isLoading) return <ViewLoading />
    if (isEmpty) return <NoData />
    return (
      <>
        {Object.entries(activities).map(([, activityList], index) => (
          <div key={index} className="flex flex-col space-y-3">
            <p className="font-semibold text-gray-900">
              {formatDate(activityList[0].createdAt)}
            </p>
            {activityList.map((activity, index) => (
              <CardNotification
                key={index}
                description={activity.description}
                createdAt={activity.createdAt}
              />
            ))}
          </div>
        ))}
      </>
    )
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getActivities(token)
      response?.status == 200
        ? setActivities(response.data.payload.data)
        : setActivities({})
      setIsLoading(false)
    }
    getData()
  }, [token, show])

  return (
    <SideModal
      show={show}
      setShow={setShow}
      className="flex h-screen w-full max-w-md flex-col bg-white"
    >
      <button onClick={handleClose} className="ml-5 mt-5 w-fit sm:hidden">
        <IconClose className="aspect-square w-6 text-gray-900" />
      </button>
      <div className="flex space-x-3 border-b border-gray-200 p-5">
        <div className="h-fit rounded-xl bg-brand-50 p-1">
          <IconNotification className="aspect-square w-6 text-brand-500" />
        </div>
        <div className="space-y-1.5">
          <p className="text-lg font-bold text-gray-900">Notifikasi</p>
          <p className="text-xs text-gray-500">
            Notifikasi baru pada dashboard Alphadev akan ditampilkan di sini.
          </p>
        </div>
      </div>
      <div className="flex h-full overflow-y-auto">
        <div className="hidden items-center sm:flex">
          <button
            onClick={handleClose}
            className="mx-[1px] flex h-16 w-8 items-center justify-center rounded-l-xl bg-brand-500"
          >
            <IconChevronRight className="aspect-square w-6 text-white" />
          </button>
        </div>
        <div className="scrollbar flex h-full w-full flex-col space-y-5 overflow-y-scroll px-4 py-5">
          <Content />
        </div>
      </div>
    </SideModal>
  )
}

const NoData = () => {
  return (
    <div className="space-y-5">
      <Images
        src={NoNotification}
        alt="alphadev-push-notification"
        fill={true}
        style={{ objectFit: 'contain' }}
        className="relative mx-auto aspect-square w-[200px]"
      />
      <div className="space-y-2 text-center">
        <p className="font-bold text-gray-900">Tidak Ada Notifikasi Baru</p>
        <p className="text-xs text-gray-500">
          Notifikasi baru untuk Halaman Facebook dan akun Instagram Anda akan
          ditampilkan di sini.
        </p>
      </div>
    </div>
  )
}

const CardNotification = ({
  description,
  createdAt,
}: {
  description: string
  createdAt: string
}) => {
  return (
    <div className="flex items-center space-x-3 rounded-xl bg-gray-50 p-2.5">
      <div className="rounded-lg bg-brand-500 p-1.5">
        <IconUser className="aspect-square w-5 text-white" />
      </div>
      <div className="flex flex-grow flex-col gap-1">
        <p className="text-sm font-medium text-gray-900">{description}</p>
        <div className="flex items-center gap-1">
          <p className="ml-auto text-xs text-gray-500">
            {formatTime(createdAt)}
          </p>
          <IconTime className="aspect-square w-3.5 text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default ModalNotification
