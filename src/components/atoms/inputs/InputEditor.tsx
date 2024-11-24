import { FC, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'

interface IInputEditor {
  value?: string
  label?: string
  height?: number
  onChange?: (value: string) => void
}

const InputEditor: FC<IInputEditor> = ({
  onChange,
  label,
  value: currentValue,
  height = 500,
}) => {
  const [value, setValue] = useState(currentValue)

  const onEditorChange = (value: string) => {
    setValue(value)
    onChange?.(value)
  }

  return (
    <div className="relative mb-6 flex flex-col">
      <label className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
      </label>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_API_KEY_TINY_MCE}
        value={value}
        init={{
          height,
          plugins: [
            'autolink',
            'print',
            'preview',
            'searchreplace',
            'lists',
            'mediaembed',
            'fullpage',
            'fullpagepaste',
            'image',
            'media',
            'link',
            'charmap',
            'hr',
            'anchor',
            'visualblocks',
            'fullscreen',
            'insertdatetime',
            'table',
            'paste',
            'code',
            'help',
            'wordcount',
            'textpattern',
            'advcode',
            'codesample',
            'directionality',
            'emoticons',
            'template',
            'toc',
            'textcolor',
            'advlist',
            'nonbreaking',
            'save',
            'contextmenu',
            'fontsize',
            'fontselect',
          ],
          toolbar: [
            'undo',
            'redo',
            'fontfamily',
            'fontsize',
            'styles',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'forecolor',
            'backcolor',
            'alignleft',
            'aligncenter',
            'alignright',
            'alignjustify',
            'outdent',
            'indent',
            'image',
            'media',
            'link',
            'table',
            'emoticons',
            'charmap',
            'insertdatetime',
            'fullscreen',
          ].join(' '),
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        onEditorChange={onEditorChange}
      />
    </div>
  )
}

export default InputEditor
