import type { Role } from '@saas/auth'

import { api } from './api-client'

interface GetinviteResponse {
  invite: {
    id: string
    role: Role
    email: string
    createdAt: string
    organization: {
      name: string
    }
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }
}

export async function getinvite(inviteId: string) {
  const result = await api.get(`invites/${inviteId}`).json<GetinviteResponse>()

  return result
}
