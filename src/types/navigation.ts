export interface NavItem {
  id?: string
  title: string
  href: string
  badge?: string
  isComingSoon?: boolean
  external?: boolean
}

export interface SidebarSection {
  id: string
  title: string
  icon?: string
  items: NavItem[]
  defaultOpen?: boolean
}

export interface BreadcrumbItem {
  title: string
  href?: string
}
