import { ability, getCurrentOrg } from '@/auth/auth'

import { NavLink } from './nav-link'
import { Button } from './ui/button'

export default async function Tabs() {
  const currentOrg = getCurrentOrg()

  const permissions = await ability()

  const canUpdateOrganizations = permissions?.can('update', 'Organization')
  const canGetMembers = permissions?.can('get', 'User')
  const canGetPrjects = permissions?.can('get', 'Project')
  const canGetBilling = permissions?.can('get', 'Billing')

  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-2">
        {canGetPrjects && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-input data-[current=true]:text-foreground"
          >
            <NavLink href={`/org/${currentOrg}`}>Projects</NavLink>
          </Button>
        )}
        {canGetMembers && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-input data-[current=true]:text-foreground"
          >
            <NavLink href={`/org/${currentOrg}/members`}>Members</NavLink>
          </Button>
        )}
        {(canUpdateOrganizations || canGetBilling) && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-input data-[current=true]:text-foreground"
          >
            <NavLink href={`/org/${currentOrg}/settings`}>
              Setting & Billing
            </NavLink>
          </Button>
        )}
      </nav>
    </div>
  )
}
