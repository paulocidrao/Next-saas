import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetmembersResponse {
  members: {
    id: string
    userId: string
    role: Role
    name: string | null
    email: string
    avatarUrl: string | null
  }[]
}

export async function getmembers(org: string) {
  const result = await api
    .get(`organizations/${org}/members`, {
      next: { tags: [`${org}/members`] },
    })
    .json<GetmembersResponse>()

  return result
}
