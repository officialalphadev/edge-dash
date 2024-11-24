/* eslint-disable react-hooks/exhaustive-deps */
import { IconAdd, IconCheck, IconDelete, IconUpload } from 'assets'
import { useDropzone } from 'react-dropzone'
import Images from '../images'
import { clsxm } from 'helpers'
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react'
import { ButtonWithIcon } from '../buttons'
import InputCheckbox from './InputCheckbox'

interface InputFilesProps {
  label?: string
  setData: Dispatch<SetStateAction<File[]>>
  data: File[]
}

const InputFiles: FC<InputFilesProps> = ({ label, setData, data }) => {
  const [selectedMedias, setSelectedMedias] = useState<File[]>([])
  const isEmpty = data.length == 0

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setData((prevFiles) => [...prevFiles, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 26214400, // 5mb
    onDrop,
  })

  const handleDeleteFiles = () => {
    const updatedData = data.filter(
      (item) =>
        !selectedMedias.some(
          (selectedMedia) => selectedMedia.name === item.name
        )
    )
    setData(updatedData)
    setSelectedMedias([])
  }

  const handleClickMedia = (file: File) => {
    const isSelected = selectedMedias.some(
      (selectedMedia) => selectedMedia.name === file.name
    )
    if (!isSelected) {
      setSelectedMedias([...selectedMedias, file])
    } else {
      setSelectedMedias(
        selectedMedias.filter(
          (selectedMedia) => selectedMedia.name !== file.name
        )
      )
    }
  }

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) return setSelectedMedias(data)
    return setSelectedMedias([])
  }

  const CardMedia: FC<{ file: File }> = ({ file }) => {
    return (
      <div
        className={clsxm(
          'relative cursor-pointer overflow-hidden rounded-xl',
          'border border-gray-100 outline-none hover:border-brand-500'
        )}
        onClick={() => handleClickMedia(file)}
      >
        <Images
          src={URL.createObjectURL(file)}
          alt={file.name}
          fill={true}
          style={{ objectFit: 'contain' }}
          className="relative aspect-[4/3] w-full"
        />
        <div
          className={clsxm(
            'absolute inset-0 flex items-center justify-center',
            'bg-black/50 transition-all duration-300',
            !selectedMedias.includes(file) && 'opacity-0'
          )}
        >
          <IconCheck className="aspect-square w-8 rounded-lg bg-brand-500 p-1 text-white" />
        </div>
      </div>
    )
  }

  return (
    <section className="mb-6">
      <label className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
      </label>
      {isEmpty && (
        <div
          {...getRootProps({
            className: 'dropzone',
          })}
          className={clsxm(
            'h-52 w-full cursor-pointer',
            'flex flex-col items-center justify-center',
            'rounded-xl border-2 border-dashed border-gray-500',
            'transition-all duration-300',
            'hover:border-brand-500 hover:bg-gray-50'
          )}
        >
          <input {...getInputProps()} />
          <IconUpload className="mb-3 aspect-square w-8 rounded-full bg-brand-500 p-2 text-white" />
          <p className="mb-3 text-sm text-gray-900">
            Seret dan lepas <span className="text-brand-500">file</span> disini
          </p>
          <p className="text-xs text-gray-500">
            Formats file: JPEG, jpg, png, WebP, GIF
          </p>
        </div>
      )}
      {!isEmpty && (
        <div className="mt-5 grid grid-cols-3 gap-5 rounded-lg bg-gray-50 p-10">
          {data?.map((file, index) => (
            <CardMedia key={index} file={file} />
          ))}
          <div
            {...getRootProps({
              className: 'dropzone',
            })}
            className={clsxm(
              'aspect-[4/3] cursor-pointer overflow-hidden',
              'flex items-center justify-center',
              'rounded-xl border border-gray-100 hover:border-brand-500',
              'transition-all duration-300'
            )}
          >
            <input {...getInputProps()} />
            <IconAdd className="aspect-square w-8 rounded-full bg-brand-500 p-2 text-white" />
          </div>
        </div>
      )}
      {!isEmpty && (
        <div className="mt-3 flex items-center justify-between gap-3 px-2">
          <InputCheckbox
            id="choose-all"
            label="Pilih semua"
            onChange={handleCheckboxChange}
          />
          <ButtonWithIcon
            text="Hapus"
            icon={<IconDelete className="aspect-square w-4" />}
            size="sm"
            onClick={handleDeleteFiles}
          />
        </div>
      )}
    </section>
  )
}

export default InputFiles
