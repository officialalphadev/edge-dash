import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataPersonalBranding } from '../constants'
import { MainLayout } from 'layouts'

const PersonalBranding = () => {
  const {
    query: { view },
  } = useRouter()

  const toLink = (value: string) => {
    return value.toLowerCase().replaceAll(' ', '-')
  }

  const toTitle = (value: string | String[]) => {
    return value.toString().replaceAll('-', ' ')
  }

  return (
    <>
      <Head>
        <title>Personal Branding | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout title="" subTitle="">
        <div className="flex h-full w-full">
          <div className="flex w-72 flex-col py-4">
            <h2 className="p-4 text-sm font-semibold text-gray-700">
              Client Models
            </h2>
            {DataPersonalBranding.map(({ name }) => (
              <Link
                href={{
                  query: { view: toLink(name) },
                }}
                key={name}
                className={`${
                  view === toLink(name)
                    ? 'border-r-4 border-r-brand-500 bg-brand-100/20 text-brand-500'
                    : 'text-gray-600 hover:border-gray-300 hover:bg-gray-100'
                } flex flex-none items-center space-x-2 py-2 pl-8 pr-2 transition-all hover:border-r-4`}
              >
                <div
                  className={`${
                    view === toLink(name) ? 'bg-brand-500' : 'bg-gray-600'
                  } h-1 w-1 rounded-full transition-all`}
                />
                <span className="whitespace-nowrap text-xs font-medium capitalize">
                  {name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-4 ml-4 w-full rounded-lg bg-white p-4 text-base capitalize shadow">
            {view && toTitle(view)}
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default PersonalBranding
