import Head from 'next/head'
import { MainLayout } from 'layouts'
import { Banner, Chart, TableExample } from 'components'
import { BannerImage } from 'assets'
import { getProfileById } from 'services'
import { Profile } from 'types'
import { useEffect, useState } from 'react'
import { useGlobalContext } from 'contexts'
import { defaultProfile } from '../constants'

const dataNewsletter = {
  labels: ['Email Terkirim', 'Email Gagal Terkirim'],
  datasets: [
    {
      label: 'persentase',
      data: [15, 75],
      backgroundColor: ['#ED1C23', '#FBD0D1'],
    },
  ],
}

const dataFlashsale = {
  labels: ['Gagal', 'Berlangsung', 'Selesai'],
  datasets: [
    {
      label: 'persentase',
      data: [15, 75, 50],
      backgroundColor: ['#ED1C23', '#3C8FDD', '#22C55E'],
    },
  ],
}

const dataPortfolio = {
  labels: ['Web Design', 'Mobile Design'],
  datasets: [
    {
      label: 'persentase',
      data: [45, 35],
      backgroundColor: ['#ED1C23', '#FBD0D1'],
    },
  ],
}

const Home = () => {
  const [profile, setProfile] = useState<Profile>(defaultProfile)

  const { token, tokenDecoded } = useGlobalContext()

  useEffect(() => {
    const getDataProfile = async () => {
      const response = await getProfileById(token, tokenDecoded.id)
      response?.status == 200
        ? setProfile(response.data.payload.data)
        : setProfile(defaultProfile)
    }
    getDataProfile()
  }, [token, tokenDecoded])

  return (
    <>
      <Head>
        <title>Beranda | Alphadev Dashboard Marketing</title>
      </Head>
      <MainLayout title="Selamat Datang" subTitle={`Hai, ${profile.fullName}!`}>
        <div className="space-y-10">
          <Banner
            title="Lakukan pekerjaan terbaik kamu"
            description="Mendapatkan akses ke semua alat yang dibutuhkan untuk mengarahkan lebih banyak website Alphadev dan menjadwalkan event-event Alphadev."
            image={BannerImage}
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            <Chart
              title="Aktivitas Flashsale"
              type="pie"
              data={dataFlashsale}
            />
            <Chart
              title="Aktivitas Newsletter"
              data={dataNewsletter}
              type="doughnut"
            />
            <Chart title="Jumlah Portofolio" data={dataPortfolio} type="pie" />
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-3">
              <h2 className="text-sm font-bold text-gray-900">
                Aktifitas Flashsale Terbaru
              </h2>
              <span className="text-xs text-gray-500">
                Menampilkan Aktifitas Flashsale Terbaru
              </span>
            </div>
            <TableExample />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Home
