'use client'
import { SelectValue } from '@radix-ui/react-select'
import type { Role } from '@saas/auth'
import type { ComponentProps } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

import { updateMemeberAction } from './action'

interface UpdateMemberRoleSelectionprops extends ComponentProps<typeof Select> {
  memberId: string
}

export function UpdateMemberRoleSelection({
  memberId,
  ...props
}: UpdateMemberRoleSelectionprops) {
  const updateMemberRole = async (role: Role) => {
    await updateMemeberAction(memberId, role)
  }

  return (
    <Select onValueChange={updateMemberRole} {...props}>
      <SelectTrigger className="h-8 w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ADMIN">Admin</SelectItem>
        <SelectItem value="MEMBER">Member</SelectItem>
        <SelectItem value="BILLING">Billing</SelectItem>
      </SelectContent>
    </Select>
  )
}
