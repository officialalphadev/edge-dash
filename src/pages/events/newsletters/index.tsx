import Head from 'next/head'
import { MainLayout } from 'layouts'
import { ButtonWithIcon, ViewNoData } from 'components'
import { IconAdd } from 'assets'
import { useRouter } from 'next/router'

const PageNewsletter = () => {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>Newsletter | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout
        title={'Ringkasan Jadwal Alphadev'}
        subTitle={'Kamu dapat mengedit semua hal sesuai keinginan'}
        buttonAction={
          <ButtonWithIcon
            text="Tambahkan acara baru"
            icon={<IconAdd className="aspect-square w-5" />}
            onClick={() => push('/events/newsletters/add')}
          />
        }
      >
        <ViewNoData />
      </MainLayout>
    </>
  )
}

export default PageNewsletter
