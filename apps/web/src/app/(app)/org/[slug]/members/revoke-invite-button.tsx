import { XOctagon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { revokeInviteAction } from './action'

interface RevokeInviteButtonprops {
  inviteId: string
}

export function RevokeInviteButton({ inviteId }: RevokeInviteButtonprops) {
  return (
    <form action={revokeInviteAction.bind(null, inviteId)}>
      <Button type="submit" size="sm" variant="destructive">
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}
