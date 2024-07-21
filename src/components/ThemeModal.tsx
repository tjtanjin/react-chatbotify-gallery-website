import React from 'react'
import { Theme } from '../interfaces/Theme'
import { downloadThemeContent } from '../utils'

interface ThemeModalProps {
  isOpen: boolean
  onClose: () => void
  theme: Theme
}

const ThemeModal: React.FC<ThemeModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null

  const onDownload = () => {
    downloadThemeContent(
      theme.content.options,
      theme.content.styles,
      theme.name
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-lg w-full relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-5 text-gray-500 text-2xl"
        >
          &times;
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="flex flex-col items-center">
            <img
              src={theme.themeImg}
              alt={theme.name}
              className="h-[400px] rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="font-semibold">Name:</div>
                <div>{theme.name}</div>
                <div className="font-semibold">Description:</div>
                <div>{theme.description}</div>
                <div className="font-semibold">Author:</div>
                <div className="flex items-center space-x-2">
                  {theme.authorImg && (
                    <img
                      src={theme.authorImg}
                      alt={theme.authorName}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div>
                    <a
                      href={`https://github.com/${theme.github}`}
                      className="text-blue-500 underline"
                    >
                      {theme.authorName}
                    </a>
                  </div>
                </div>
                <div className="font-semibold">Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {theme.tags.map((tag, index) => (
                    <span
                      key={`tag-${index.toString()}`}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-semibold">Contents:</div>
                <button
                  type="button"
                  onClick={() => onDownload()}
                  className="theme-card-download"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeModal
