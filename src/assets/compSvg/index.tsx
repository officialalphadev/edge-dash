import { FC, SVGProps } from 'react'

interface IIconSvg extends SVGProps<SVGSVGElement> {}

export const IconClose: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.47001 5.47C5.61064 5.32955 5.80126 5.25066 6.00001 5.25066C6.19876 5.25066 6.38939 5.32955 6.53001 5.47L12 10.94L17.47 5.47C17.5387 5.39631 17.6215 5.33721 17.7135 5.29622C17.8055 5.25523 17.9048 5.23319 18.0055 5.23141C18.1062 5.22963 18.2062 5.24816 18.2996 5.28588C18.393 5.3236 18.4778 5.37974 18.549 5.45096C18.6203 5.52218 18.6764 5.60701 18.7141 5.7004C18.7519 5.79379 18.7704 5.89382 18.7686 5.99452C18.7668 6.09523 18.7448 6.19454 18.7038 6.28654C18.6628 6.37854 18.6037 6.46134 18.53 6.53L13.06 12L18.53 17.47C18.6037 17.5387 18.6628 17.6215 18.7038 17.7135C18.7448 17.8055 18.7668 17.9048 18.7686 18.0055C18.7704 18.1062 18.7519 18.2062 18.7141 18.2996C18.6764 18.393 18.6203 18.4778 18.549 18.549C18.4778 18.6203 18.393 18.6764 18.2996 18.7141C18.2062 18.7518 18.1062 18.7704 18.0055 18.7686C17.9048 18.7668 17.8055 18.7448 17.7135 18.7038C17.6215 18.6628 17.5387 18.6037 17.47 18.53L12 13.06L6.53001 18.53C6.38784 18.6625 6.19979 18.7346 6.00549 18.7312C5.81119 18.7277 5.6258 18.649 5.48839 18.5116C5.35098 18.3742 5.27226 18.1888 5.26884 17.9945C5.26541 17.8002 5.33753 17.6122 5.47001 17.47L10.94 12L5.47001 6.53C5.32956 6.38938 5.25067 6.19875 5.25067 6C5.25067 5.80125 5.32956 5.61063 5.47001 5.47Z"
      fill="currentColor"
    />
  </svg>
)

export const IconDelete: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.74 9L14.394 18M9.606 18L9.26 9M19.228 5.79C19.57 5.842 19.91 5.897 20.25 5.956M19.228 5.791L18.16 19.673C18.1164 20.2382 17.8611 20.7662 17.445 21.1512C17.029 21.5363 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5363 6.55498 21.1512C6.13894 20.7662 5.88359 20.2382 5.84 19.673L4.772 5.79M19.228 5.79C18.0739 5.61552 16.9138 5.48309 15.75 5.393M3.75 5.955C4.09 5.896 4.43 5.841 4.772 5.79M4.772 5.79C5.92613 5.61552 7.08623 5.4831 8.25 5.393M15.75 5.393V4.477C15.75 3.297 14.84 2.313 13.66 2.276C12.5536 2.24064 11.4464 2.24064 10.34 2.276C9.16 2.313 8.25 3.298 8.25 4.477V5.393M15.75 5.393C13.2537 5.20008 10.7463 5.20008 8.25 5.393"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconEdit: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.7629 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.7629 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65326 3.23705 7.08097 3.65901 6.65901C4.08097 6.23705 4.65326 6 5.25 6H10M16.862 4.487L18.549 2.799C18.9007 2.44732 19.3777 2.24975 19.875 2.24975C20.3723 2.24975 20.8493 2.44732 21.201 2.799C21.5527 3.15068 21.7502 3.62765 21.7502 4.125C21.7502 4.62235 21.5527 5.09932 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487V4.487Z"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconEllipsisVertical: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 6C10.5 5.60218 10.658 5.22064 10.9393 4.93934C11.2206 4.65804 11.6022 4.5 12 4.5C12.3978 4.5 12.7794 4.65804 13.0607 4.93934C13.342 5.22064 13.5 5.60218 13.5 6C13.5 6.39782 13.342 6.77936 13.0607 7.06066C12.7794 7.34196 12.3978 7.5 12 7.5C11.6022 7.5 11.2206 7.34196 10.9393 7.06066C10.658 6.77936 10.5 6.39782 10.5 6ZM10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12ZM10.5 18C10.5 17.6022 10.658 17.2206 10.9393 16.9393C11.2206 16.658 11.6022 16.5 12 16.5C12.3978 16.5 12.7794 16.658 13.0607 16.9393C13.342 17.2206 13.5 17.6022 13.5 18C13.5 18.3978 13.342 18.7794 13.0607 19.0607C12.7794 19.342 12.3978 19.5 12 19.5C11.6022 19.5 11.2206 19.342 10.9393 19.0607C10.658 18.7794 10.5 18.3978 10.5 18Z"
      fill="currentColor"
    />
  </svg>
)

export const IconError: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM10.28 9.22C10.2113 9.14631 10.1285 9.08721 10.0365 9.04622C9.94454 9.00523 9.84522 8.98318 9.74452 8.98141C9.64382 8.97963 9.54379 8.99816 9.4504 9.03588C9.35701 9.0736 9.27218 9.12974 9.20096 9.20096C9.12974 9.27218 9.0736 9.35701 9.03588 9.4504C8.99816 9.54379 8.97963 9.64382 8.98141 9.74452C8.98318 9.84522 9.00523 9.94454 9.04622 10.0365C9.08721 10.1285 9.14631 10.2113 9.22 10.28L10.94 12L9.22 13.72C9.14631 13.7887 9.08721 13.8715 9.04622 13.9635C9.00523 14.0555 8.98318 14.1548 8.98141 14.2555C8.97963 14.3562 8.99816 14.4562 9.03588 14.5496C9.0736 14.643 9.12974 14.7278 9.20096 14.799C9.27218 14.8703 9.35701 14.9264 9.4504 14.9641C9.54379 15.0018 9.64382 15.0204 9.74452 15.0186C9.84522 15.0168 9.94454 14.9948 10.0365 14.9538C10.1285 14.9128 10.2113 14.8537 10.28 14.78L12 13.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L13.06 12L14.78 10.28C14.8537 10.2113 14.9128 10.1285 14.9538 10.0365C14.9948 9.94454 15.0168 9.84522 15.0186 9.74452C15.0204 9.64382 15.0018 9.54379 14.9641 9.4504C14.9264 9.35701 14.8703 9.27218 14.799 9.20096C14.7278 9.12974 14.643 9.0736 14.5496 9.03588C14.4562 8.99816 14.3562 8.97963 14.2555 8.98141C14.1548 8.98318 14.0555 9.00523 13.9635 9.04622C13.8715 9.08721 13.7887 9.14631 13.72 9.22L12 10.94L10.28 9.22Z"
      fill="currentColor"
    />
  </svg>
)

export const IconEvent: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconHome: FC<IIconSvg> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
)

export const IconInfo: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM10.956 10.558C12.102 9.985 13.393 11.021 13.082 12.264L12.373 15.1L12.415 15.08C12.5912 15.0025 12.7905 14.9958 12.9715 15.0612C13.1526 15.1265 13.3016 15.259 13.3877 15.4312C13.4737 15.6033 13.4903 15.802 13.434 15.9861C13.3777 16.1702 13.2527 16.3255 13.085 16.42L13.045 16.442C11.898 17.015 10.607 15.979 10.918 14.736L11.628 11.9L11.586 11.92C11.4975 11.9692 11.4 11.9999 11.2994 12.0104C11.1987 12.0209 11.097 12.0109 11.0003 11.981C10.9036 11.9511 10.8139 11.902 10.7367 11.8366C10.6595 11.7711 10.5964 11.6907 10.551 11.6002C10.5057 11.5098 10.4792 11.411 10.4731 11.31C10.4669 11.209 10.4813 11.1078 10.5153 11.0124C10.5493 10.9171 10.6022 10.8297 10.6709 10.7553C10.7396 10.681 10.8226 10.6214 10.915 10.58L10.956 10.558ZM12 9C12.1989 9 12.3897 8.92098 12.5303 8.78033C12.671 8.63968 12.75 8.44891 12.75 8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25C11.25 8.44891 11.329 8.63968 11.4697 8.78033C11.6103 8.92098 11.8011 9 12 9Z"
      fill="currentColor"
    />
  </svg>
)

export const IconInfoOutline: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 17 16" fill="none" {...props}>
    <path
      d="M7.68182 7.5L7.70916 7.48667C7.79464 7.44396 7.89058 7.42664 7.9856 7.43677C8.08062 7.4469 8.17075 7.48404 8.24532 7.54381C8.31989 7.60357 8.37576 7.68345 8.40633 7.77399C8.43691 7.86453 8.44089 7.96193 8.41782 8.05467L7.94582 9.94533C7.92259 10.0381 7.92645 10.1356 7.95695 10.2263C7.98745 10.3169 8.04332 10.3969 8.11792 10.4568C8.19251 10.5166 8.28271 10.5538 8.37782 10.564C8.47293 10.5741 8.56895 10.5568 8.65449 10.514L8.68182 10.5M14.1818 8C14.1818 8.78793 14.0266 9.56815 13.7251 10.2961C13.4236 11.0241 12.9816 11.6855 12.4245 12.2426C11.8673 12.7998 11.2059 13.2417 10.4779 13.5433C9.74997 13.8448 8.96976 14 8.18182 14C7.39389 14 6.61368 13.8448 5.88572 13.5433C5.15777 13.2417 4.49633 12.7998 3.93918 12.2426C3.38203 11.6855 2.94007 11.0241 2.63855 10.2961C2.33702 9.56815 2.18182 8.78793 2.18182 8C2.18182 6.4087 2.81396 4.88258 3.93918 3.75736C5.0644 2.63214 6.59052 2 8.18182 2C9.77312 2 11.2992 2.63214 12.4245 3.75736C13.5497 4.88258 14.1818 6.4087 14.1818 8ZM8.18182 5.5H8.18716V5.50533H8.18182V5.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconLoading: FC<IIconSvg> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
)

export const IconLogout: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.9091 9V5.25C16.9091 4.65326 16.6505 4.08097 16.1902 3.65901C15.7299 3.23705 15.1055 3 14.4545 3H5.45455C4.80356 3 4.17924 3.23705 3.71892 3.65901C3.2586 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.2586 19.919 3.71892 20.341C4.17924 20.7629 4.80356 21 5.45455 21H14.4545C15.1055 21 15.7299 20.7629 16.1902 20.341C16.6505 19.919 16.9091 19.3467 16.9091 18.75V15M10.3636 9L7.09091 12M7.09091 12L10.3636 15M7.09091 12H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconMenu: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75ZM3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12ZM3 17.25C3 17.0511 3.07902 16.8603 3.21967 16.7197C3.36032 16.579 3.55109 16.5 3.75 16.5H20.25C20.4489 16.5 20.6397 16.579 20.7803 16.7197C20.921 16.8603 21 17.0511 21 17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18H3.75C3.55109 18 3.36032 17.921 3.21967 17.7803C3.07902 17.6397 3 17.4489 3 17.25Z"
      fill="currentColor"
    />
  </svg>
)

export const IconNotification: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9.05V9C18 7.4087 17.3679 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88258 3.63214 7.75736 4.75736C6.63214 5.88258 6 7.4087 6 9V9.75C6.00302 11.9746 5.17899 14.121 3.688 15.772C5.421 16.412 7.248 16.857 9.143 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.143 17.082M14.857 17.082C15.0011 17.5319 15.0369 18.0094 14.9616 18.4757C14.8862 18.942 14.7018 19.384 14.4234 19.7656C14.1449 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85507 20.1472 9.57662 19.7656C9.29817 19.384 9.11376 18.942 9.03841 18.4757C8.96306 18.0094 8.9989 17.5319 9.143 17.082"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconSetting: FC<IIconSvg> = (props) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

export const IconSuccess: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75C6.615 21.75 2.25 17.385 2.25 12ZM15.61 10.186C15.67 10.1061 15.7134 10.0149 15.7377 9.91795C15.762 9.82098 15.7666 9.72014 15.7514 9.62135C15.7361 9.52257 15.7012 9.42782 15.6489 9.3427C15.5965 9.25757 15.5276 9.18378 15.4463 9.12565C15.3649 9.06753 15.2728 9.02624 15.1753 9.00423C15.0778 8.98221 14.9769 8.97991 14.8785 8.99746C14.7801 9.01501 14.6862 9.05205 14.6023 9.10641C14.5184 9.16077 14.4462 9.23135 14.39 9.314L11.154 13.844L9.53 12.22C9.38783 12.0875 9.19978 12.0154 9.00548 12.0188C8.81118 12.0223 8.62579 12.101 8.48838 12.2384C8.35097 12.3758 8.27225 12.5612 8.26882 12.7555C8.2654 12.9498 8.33752 13.1378 8.47 13.28L10.72 15.53C10.797 15.6069 10.8898 15.6662 10.992 15.7036C11.0942 15.7411 11.2033 15.7559 11.3118 15.7469C11.4202 15.738 11.5255 15.7055 11.6201 15.6519C11.7148 15.5982 11.7967 15.5245 11.86 15.436L15.61 10.186Z"
      fill="currentColor"
    />
  </svg>
)

export const IconUser: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.685 19.097C19.654 18.1865 20.426 17.0869 20.9532 15.8662C21.4803 14.6455 21.7515 13.3297 21.75 12C21.75 6.615 17.385 2.25 12 2.25C6.61501 2.25 2.25001 6.615 2.25001 12C2.24847 13.3297 2.51967 14.6455 3.04686 15.8662C3.57404 17.0869 4.346 18.1865 5.31501 19.097C7.12194 20.8039 9.51435 21.7533 12 21.75C14.4857 21.7533 16.8781 20.8039 18.685 19.097ZM6.14501 17.812C6.84708 16.9336 7.73802 16.2247 8.75164 15.7379C9.76527 15.2511 10.8755 14.9989 12 15C13.1245 14.9989 14.2347 15.2511 15.2484 15.7379C16.262 16.2247 17.1529 16.9336 17.855 17.812C17.089 18.5857 16.1771 19.1996 15.172 19.6181C14.1669 20.0366 13.0887 20.2514 12 20.25C10.9113 20.2514 9.83311 20.0366 8.82803 19.6181C7.82296 19.1996 6.91098 18.5857 6.14501 17.812ZM15.75 9C15.75 9.99456 15.3549 10.9484 14.6517 11.6517C13.9484 12.3549 12.9946 12.75 12 12.75C11.0054 12.75 10.0516 12.3549 9.34836 11.6517C8.64509 10.9484 8.25001 9.99456 8.25001 9C8.25001 8.00544 8.64509 7.05161 9.34836 6.34835C10.0516 5.64509 11.0054 5.25 12 5.25C12.9946 5.25 13.9484 5.64509 14.6517 6.34835C15.3549 7.05161 15.75 8.00544 15.75 9Z"
      fill="currentColor"
    />
  </svg>
)

export const IconUsers: FC<IIconSvg> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
)

export const IconWarning: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.401 3.003C10.556 1.003 13.444 1.003 14.598 3.003L21.953 15.751C23.107 17.751 21.663 20.251 19.354 20.251H4.645C2.336 20.251 0.892995 17.751 2.047 15.751L9.4 3.003H9.401ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25ZM12 16.5C12.1989 16.5 12.3897 16.421 12.5303 16.2803C12.671 16.1397 12.75 15.9489 12.75 15.75C12.75 15.5511 12.671 15.3603 12.5303 15.2197C12.3897 15.079 12.1989 15 12 15C11.8011 15 11.6103 15.079 11.4697 15.2197C11.329 15.3603 11.25 15.5511 11.25 15.75C11.25 15.9489 11.329 16.1397 11.4697 16.2803C11.6103 16.421 11.8011 16.5 12 16.5Z"
      fill="currentColor"
    />
  </svg>
)

export const IconPortfolio: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.25 7.5V6.108C8.25 4.973 9.095 4.01 10.226 3.916C10.599 3.886 10.974 3.859 11.349 3.836M15.75 18H18C18.5967 18 19.169 17.7629 19.591 17.341C20.0129 16.919 20.25 16.3467 20.25 15.75V6.108C20.25 4.973 19.405 4.01 18.274 3.916C17.9 3.88498 17.5256 3.85831 17.151 3.836M17.151 3.836C17.009 3.3767 16.7226 2.97493 16.3357 2.68954C15.9489 2.40414 15.4808 2.25011 15 2.25H13.5C13.0192 2.25011 12.5511 2.40414 12.1643 2.68954C11.7774 2.97493 11.492 3.3767 11.35 3.836C11.285 4.046 11.25 4.269 11.25 4.5V5.25H17.25V4.5C17.25 4.269 17.216 4.046 17.151 3.836ZM15.75 18.75V16.875C15.75 15.9799 15.3944 15.1215 14.7615 14.4885C14.1285 13.8556 13.2701 13.5 12.375 13.5H10.875C10.5766 13.5 10.2905 13.3815 10.0795 13.1705C9.86853 12.9595 9.75 12.6734 9.75 12.375V10.875C9.75 9.97989 9.39442 9.12145 8.76149 8.48851C8.12855 7.85558 7.27011 7.5 6.375 7.5H5.25M6.75 7.5H4.875C4.254 7.5 3.75 8.004 3.75 8.625V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V16.5C15.75 14.1131 14.8018 11.8239 13.114 10.136C11.4261 8.44821 9.13695 7.5 6.75 7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconChevronBottom: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4417 13.5667C10.3245 13.6837 10.1657 13.7494 10 13.7494C9.83441 13.7494 9.67556 13.6837 9.55837 13.5667L3.30837 7.31667C3.19797 7.19819 3.13787 7.04148 3.14072 6.87956C3.14358 6.71765 3.20917 6.56316 3.32368 6.44865C3.43819 6.33414 3.59268 6.26854 3.7546 6.26569C3.91652 6.26283 4.07322 6.32293 4.1917 6.43333L10 12.2417L15.8084 6.43333C15.8656 6.37193 15.9346 6.32268 16.0113 6.28852C16.0879 6.25436 16.1707 6.23599 16.2546 6.23451C16.3385 6.23303 16.4219 6.24846 16.4997 6.2799C16.5775 6.31133 16.6482 6.35812 16.7076 6.41747C16.7669 6.47682 16.8137 6.54751 16.8451 6.62533C16.8766 6.70316 16.892 6.78652 16.8905 6.87043C16.889 6.95435 16.8707 7.03712 16.8365 7.11378C16.8024 7.19045 16.7531 7.25945 16.6917 7.31667L10.4417 13.5667Z"
      fill="currentColor"
    />
  </svg>
)

export const IconFlashsale: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11 5.88218V19.2402C11 20.2121 10.2121 21 9.24018 21C8.49646 21 7.83302 20.5325 7.58288 19.8321L5.43647 13.6829M18 13C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7M5.43647 13.6829C4.0043 13.0741 3 11.6543 3 10C3 7.79086 4.79086 6 6.99999 6H8.83208C12.9327 6 16.4569 4.7659 18 3L18 17C16.4569 15.2341 12.9327 14 8.83208 14L6.99998 14C6.44518 14 5.91677 13.887 5.43647 13.6829Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconNewsletter: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 21H5C3.89543 21 3 19.9926 3 18.75L3 5.25C3 4.00736 3.89543 3 5 3L15 3C16.1046 3 17 4.00736 17 5.25V6.375M19 21C17.8954 21 17 19.9926 17 18.75L17 6.375M19 21C20.1046 21 21 19.9926 21 18.75V8.625C21 7.38236 20.1046 6.375 19 6.375L17 6.375M13 3L9 3M7 16.5H13M7 7.5H13V12H7V7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconProfile: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17.982 18.725C17.2833 17.7999 16.3793 17.0496 15.3412 16.5334C14.3031 16.0171 13.1594 15.7489 12 15.75C10.8407 15.7489 9.6969 16.0171 8.65883 16.5334C7.62077 17.0496 6.71675 17.7999 6.01801 18.725M17.981 18.725C19.3445 17.5122 20.3071 15.9136 20.7412 14.1411C21.1753 12.3686 21.0603 10.5061 20.4115 8.80048C19.7627 7.09487 18.6107 5.62678 17.1084 4.5909C15.6061 3.55502 13.8244 3.00029 11.9995 3.00029C10.1747 3.00029 8.39295 3.55502 6.89062 4.5909C5.38829 5.62678 4.23634 7.09487 3.58755 8.80048C2.93875 10.5061 2.82376 12.3686 3.25783 14.1411C3.6919 15.9136 4.65451 17.5122 6.01801 18.725M17.981 18.725C16.335 20.1932 14.2056 21.0031 12 21C9.79404 21.0034 7.66425 20.1934 6.01801 18.725M15 9.75C15 10.5456 14.6839 11.3087 14.1213 11.8713C13.5587 12.4339 12.7957 12.75 12 12.75C11.2044 12.75 10.4413 12.4339 9.87869 11.8713C9.31608 11.3087 9.00001 10.5456 9.00001 9.75C9.00001 8.95435 9.31608 8.19129 9.87869 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75C12.7957 6.75 13.5587 7.06607 14.1213 7.62868C14.6839 8.19129 15 8.95435 15 9.75V9.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconRole: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconSearch: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 3.12501C8.01131 3.12501 7.27986 3.2705 6.59741 3.55319C5.91495 3.83587 5.29485 4.2502 4.77252 4.77253C4.25019 5.29486 3.83586 5.91496 3.55318 6.59741C3.27049 7.27987 3.125 8.01132 3.125 8.75001C3.125 9.48869 3.27049 10.2201 3.55318 10.9026C3.83586 11.5851 4.25019 12.2052 4.77252 12.7275C5.29485 13.2498 5.91495 13.6641 6.59741 13.9468C7.27986 14.2295 8.01131 14.375 8.75 14.375C10.2418 14.375 11.6726 13.7824 12.7275 12.7275C13.7824 11.6726 14.375 10.2419 14.375 8.75001C14.375 7.25817 13.7824 5.82743 12.7275 4.77253C11.6726 3.71764 10.2418 3.12501 8.75 3.12501ZM1.875 8.75001C1.87515 7.64592 2.1412 6.55811 2.65066 5.57859C3.16012 4.59907 3.89799 3.75666 4.80186 3.12261C5.70574 2.48856 6.74902 2.08153 7.84347 1.93595C8.93791 1.79036 10.0513 1.91051 11.0895 2.28622C12.1277 2.66194 13.0601 3.28216 13.808 4.09444C14.5558 4.90672 15.0969 5.88715 15.3857 6.95281C15.6745 8.01846 15.7023 9.13799 15.4669 10.2167C15.2315 11.2954 14.7398 12.3015 14.0333 13.15L17.9417 17.0583C18.0031 17.1156 18.0523 17.1846 18.0865 17.2612C18.1206 17.3379 18.139 17.4207 18.1405 17.5046C18.142 17.5885 18.1265 17.6718 18.0951 17.7497C18.0637 17.8275 18.0169 17.8982 17.9575 17.9575C17.8982 18.0169 17.8275 18.0637 17.7497 18.0951C17.6718 18.1265 17.5885 18.142 17.5046 18.1405C17.4206 18.139 17.3379 18.1207 17.2612 18.0865C17.1846 18.0523 17.1156 18.0031 17.0583 17.9417L13.15 14.0333C12.146 14.8696 10.9245 15.4024 9.6286 15.5694C8.33268 15.7364 7.01602 15.5306 5.83284 14.9762C4.64967 14.4218 3.64899 13.5416 2.94803 12.439C2.24707 11.3363 1.87486 10.0566 1.875 8.75001Z"
      fill="currentColor"
    />
  </svg>
)

export const IconChevronLeft: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.14671 8.35333C5.05308 8.25958 5.00049 8.1325 5.00049 8C5.00049 7.8675 5.05308 7.74042 5.14671 7.64667L10.1467 2.64667C10.1925 2.59754 10.2477 2.55814 10.309 2.53081C10.3704 2.50348 10.4366 2.48879 10.5037 2.48761C10.5708 2.48642 10.6375 2.49877 10.6998 2.52392C10.762 2.54907 10.8186 2.5865 10.8661 2.63397C10.9136 2.68145 10.951 2.73801 10.9761 2.80027C11.0013 2.86253 11.0136 2.92921 11.0124 2.99635C11.0113 3.06348 10.9966 3.12969 10.9692 3.19103C10.9419 3.25236 10.9025 3.30756 10.8534 3.35333L6.20672 8L10.8534 12.6467C10.9025 12.6924 10.9419 12.7476 10.9692 12.809C10.9966 12.8703 11.0113 12.9365 11.0124 13.0037C11.0136 13.0708 11.0013 13.1375 10.9761 13.1997C10.951 13.262 10.9136 13.3185 10.8661 13.366C10.8186 13.4135 10.762 13.4509 10.6998 13.4761C10.6375 13.5012 10.5708 13.5136 10.5037 13.5124C10.4366 13.5112 10.3704 13.4965 10.309 13.4692C10.2477 13.4419 10.1925 13.4025 10.1467 13.3533L5.14671 8.35333Z"
      fill="currentColor"
    />
  </svg>
)

export const IconChevronRight: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 17 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3536 7.64667C11.4472 7.74042 11.4998 7.8675 11.4998 8C11.4998 8.1325 11.4472 8.25958 11.3536 8.35333L6.35356 13.3533C6.25877 13.4417 6.13341 13.4897 6.00388 13.4875C5.87434 13.4852 5.75075 13.4327 5.65914 13.3411C5.56753 13.2495 5.51506 13.1259 5.51277 12.9963C5.51049 12.8668 5.55857 12.7414 5.64689 12.6467L10.2936 8L5.64689 3.35333C5.55857 3.25855 5.51049 3.13319 5.51277 3.00365C5.51506 2.87412 5.56753 2.75053 5.65914 2.65892C5.75075 2.56731 5.87434 2.51484 6.00388 2.51255C6.13341 2.51026 6.25877 2.55835 6.35356 2.64667L11.3536 7.64667Z"
      fill="currentColor"
    />
  </svg>
)

export const IconEllipsisHorizontal: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 21 20" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.30556 10C4.30556 9.66848 4.43725 9.35054 4.67167 9.11612C4.90609 8.8817 5.22404 8.75 5.55556 8.75C5.88708 8.75 6.20502 8.8817 6.43944 9.11612C6.67386 9.35054 6.80556 9.66848 6.80556 10C6.80556 10.3315 6.67386 10.6495 6.43944 10.8839C6.20502 11.1183 5.88708 11.25 5.55556 11.25C5.22404 11.25 4.90609 11.1183 4.67167 10.8839C4.43725 10.6495 4.30556 10.3315 4.30556 10ZM9.30556 10C9.30556 9.66848 9.43725 9.35054 9.67167 9.11612C9.90609 8.8817 10.224 8.75 10.5556 8.75C10.8871 8.75 11.205 8.8817 11.4394 9.11612C11.6739 9.35054 11.8056 9.66848 11.8056 10C11.8056 10.3315 11.6739 10.6495 11.4394 10.8839C11.205 11.1183 10.8871 11.25 10.5556 11.25C10.224 11.25 9.90609 11.1183 9.67167 10.8839C9.43725 10.6495 9.30556 10.3315 9.30556 10ZM14.3056 10C14.3056 9.66848 14.4373 9.35054 14.6717 9.11612C14.9061 8.8817 15.224 8.75 15.5556 8.75C15.8871 8.75 16.205 8.8817 16.4394 9.11612C16.6739 9.35054 16.8056 9.66848 16.8056 10C16.8056 10.3315 16.6739 10.6495 16.4394 10.8839C16.205 11.1183 15.8871 11.25 15.5556 11.25C15.224 11.25 14.9061 11.1183 14.6717 10.8839C14.4373 10.6495 14.3056 10.3315 14.3056 10Z"
      fill="currentColor"
    />
  </svg>
)

export const IconAdd: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M10 3.75V16.25M16.25 10H3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconUpload: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M2.5 13.75V15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625V13.75M6.25 6.25L10 2.5M10 2.5L13.75 6.25M10 2.5V13.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconDocument: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
)

export const IconLink: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
)

export const IconTime: FC<IIconSvg> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const IconMedia: FC<IIconSvg> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
)

export const IconView: FC<IIconSvg> = (props) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

export const IconCheck: FC<IIconSvg> = (props) => (
  <svg viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M3 8.5L7 12.5L13 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconFaq: FC<IIconSvg> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
    />
  </svg>
)
