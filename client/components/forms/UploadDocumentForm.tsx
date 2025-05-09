'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useUploadDocumentMutation } from '@/lib/documentApiSlice'
import { TUploadDocumentRequest } from '@/types/request/document'
import getUserFromToken from '@/lib/getUserFromToken'

const uploadSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  userId: yup.number().required('User ID is required')
})

const UploadDocumentForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TUploadDocumentRequest>({
    resolver: yupResolver(uploadSchema),
  })

  const [uploadDocument, { isLoading }] = useUploadDocumentMutation()

  const onSubmit = async (data: TUploadDocumentRequest) => {
    const user = getUserFromToken()
    if (!user) {
      toast.error('User not authenticated')
      return
    }
    try {
      const payload = { ...data, userId: user.userId }
      await uploadDocument(payload).unwrap()
      toast.success('Document uploaded!')
      reset()
    } catch {
      toast.error('Failed to upload document')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-4'>
      <input
        type='text'
        {...register('title')}
        placeholder='Document Title'
        className='p-2 border rounded'
      />
      {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
      <textarea
        {...register('content')}
        placeholder='Document Content'
        className='p-2 border rounded h-40'
      />
      {errors.content && <p className='text-red-500 text-sm'>{errors.content.message}</p>}
      <button
        type='submit'
        className='p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        disabled={isLoading}
      >
        {isLoading ? 'Uploading...' : 'Upload Document'}
      </button>
    </form>
  )
}

export default UploadDocumentForm