const getThemeData = async (item: string) => {
  // todo: move this into .env
  const cdnUrl =
    'https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes'

  // fetch meta info
  const metaFile = 'meta.json'
  const metaUrl = `${cdnUrl}/${item}/${metaFile}`
  const meta = await (await fetch(metaUrl)).json()

  // fetch display image
  const displayFile = 'display.png'
  const displayUrl = `${cdnUrl}/${item}/${meta.version}/${displayFile}`

  // todo: backend to provide these values?
  const id = 0
  const authorImg = ''
  const tags = ['Retro']

  // todo:

  return {
    id,
    name: meta.theme,
    tags,
    themeImg: displayUrl,
    authorName: meta.author,
    authorImg,
    description: meta.description,
    github: meta.github
  }
}

export { getThemeData }
