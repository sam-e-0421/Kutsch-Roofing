import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbSchema, schemaToScript } from '@/lib/schema';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always include home as the first item
  const allItems: BreadcrumbItem[] = [{ name: 'Home', href: '/' }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaToScript(getBreadcrumbSchema(allItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isFirst = index === 0;

          return (
            <div key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0" />
              )}
              {isLast ? (
                <span className="text-white/60 truncate max-w-[200px]">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                >
                  {isFirst && <Home className="w-4 h-4" />}
                  <span className={isFirst ? 'sr-only sm:not-sr-only' : ''}>
                    {item.name}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
