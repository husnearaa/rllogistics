import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface PageHeaderProps {
  title: string
  breadcrumbs: { label: string; href?: string }[]
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <>
                  {item.href ? (
                    <BreadcrumbLink 
                      href={item.href} 
                      className="text-gray-600 hover:text-gray-900 text-base"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-gray-900 font-medium text-base">
                      {item.label}
                    </BreadcrumbPage>
                  )}
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}