import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js'
import { Doughnut, Pie } from 'react-chartjs-2'
import { IconInfoOutline } from 'assets'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartType = ['doughnut', 'pie'] as const

type typeChart = {
  title: string
  data: ChartData<any>
  type: typeof chartType[number]
}

const Chart = ({ title, data, type }: typeChart) => {
  return (
    <div className="flex flex-col rounded-[20px] bg-white shadow-modal-smooth">
      <div className="flex items-center justify-between border-b border-gray-100 py-4 px-5">
        <span className="text-xs font-semibold text-gray-500">{title}</span>
        <IconInfoOutline className="aspect-square w-4 text-gray-500" />
      </div>
      <div className="flex flex-col px-16 pt-5 pb-10">
        {type == 'doughnut' && <Doughnut data={data} />}
        {type == 'pie' && <Pie data={data} />}
      </div>
    </div>
  )
}

export default Chart
