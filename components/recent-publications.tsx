"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { researchCategories } from "@/lib/publications"

export function RecentPublications() {
  // Get all publications and sort by year in descending order (newest first)
  const allPublications = Object.values(researchCategories)
    .reduce(
      (acc, category) => {
        return [...acc, ...category.publications]
      },
      [] as Array<{ citation: string; link?: string; year: number }>,
    )
    .sort((a, b) => b.year - a.year)

  // Remove duplicates and get the 3 most recent
  const recentPublications = allPublications
    .filter((publication, index, self) => index === self.findIndex((p) => p.citation === publication.citation))
    .slice(0, 3)

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Recent Publications</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <Button variant="outline" size="sm" className="whitespace-nowrap" asChild>
            <Link href="/publications">View All Publications</Link>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 whitespace-nowrap" asChild>
            <a
              href="https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Google Scholar
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPublications.map((publication, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="line-clamp-2 text-base sm:text-lg">{publication.citation.split(".")[0]}.</CardTitle>
              <CardDescription>Published in {publication.year}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{publication.citation}</p>
              {publication.link && (
                <Button variant="link" className="h-auto p-0 mt-4" asChild>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    View Publication <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
