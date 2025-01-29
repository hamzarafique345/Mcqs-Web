import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token:"skGhEsds1L0RazdTkjjplp3UVUMIOw3zKg9HvrPO1ucdWyYSNGskUdrmeDrjkFwe7LxCeqIX1vt3Cvsf4CcQyVxaLdvckDbvYAEjRKVmqQVMKDX8Z8EUNcTUchWOZnPxYqtETtUOYZ6fv3faaSKDwAQQk6AFIK07P3lsyh3nOrcpUuxl6bAs"// Set to false if statically generating pages, using ISR or tag-based revalidation
})
