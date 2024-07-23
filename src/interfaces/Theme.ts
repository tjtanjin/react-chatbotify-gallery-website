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

export interface GithubUserDetails {
  name: string
  login: string
  bio: string
  avatar_url: string
  twitter_username: string
  html_url: string
  location: string
}
