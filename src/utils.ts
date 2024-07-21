import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const fetchFile = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`)
  }
  return response.blob()
}

export const downloadThemeContent = async (
  optionsUrl: string,
  stylesUrl: string,
  zipName: string
) => {
  const zip = new JSZip()
  try {
    const options = await fetchFile(optionsUrl)
    const styles = await fetchFile(stylesUrl)

    zip.file('options.json', options)
    zip.file('styles.css', styles)

    const content = await zip.generateAsync({ type: 'blob' })
    saveAs(content, `${zipName}.zip`)
  } catch (error) {
    console.error('Error downloading files:', error)
  }
}
