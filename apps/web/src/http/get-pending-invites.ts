import type { Role } from '@saas/auth'

import { api } from './api-client'

interface GetpendinginvitesResponse {
  invites: {
    organization: {
      name: string
    }
    id: string
    role: Role
    email: string
    createdAt: string
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }[]
}

export async function getpendinginvites() {
  const result = await api
    .get(`pending-invites`)
    .json<GetpendinginvitesResponse>()

  return result
}
