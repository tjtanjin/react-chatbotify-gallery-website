interface ThemeContent {
  settings: string
  inlineStyles: string
  cssStyles: string
}

export interface Theme {
  id: string
  name: string
  description: string
  version: string
  themeImg: string
  authorImg: string
  authorName: string
  tags: string[]
  github: string
  content: ThemeContent
}
