type typeBadgeStatus = {
  text: 'finish' | 'ongoing' | 'marketing' | 'developer' | String
}

const BadgeStatus = ({ text }: typeBadgeStatus) => {
  return (
    <div
      className={`rounded-xl px-2.5 py-2 text-center text-xs font-medium text-gray-50 ${(() => {
        switch (text) {
          case 'finish':
            return 'bg-success-500'
          case 'ongoing':
            return 'bg-info-500'
          case 'developer':
            return 'bg-info-500'
          case 'marketing':
            return 'bg-warning-500'
        }
      })()}`}
    >
      {(() => {
        switch (text) {
          case 'finish':
            return 'Selesai'
          case 'ongoing':
            return 'Berjalan'
          case 'developer':
            return 'Developer'
          case 'marketing':
            return 'Marketing'
        }
      })()}
    </div>
  )
}

export default BadgeStatus
