import { Dispatch, SetStateAction, useState } from 'react';

import ChatBot, { Params } from 'react-chatbotify';
import { formatPreviewIdToTitleCase } from '../../utils';

type DesktopThemePreviewProps = {
  previewIds: string[];
  clearPreviewIds: () => void;
  setPreviewIds: Dispatch<SetStateAction<string[]>>;
};

const DesktopThemePreview = ({
  previewIds,
  clearPreviewIds,
  setPreviewIds,
}: DesktopThemePreviewProps) => {
  // flow for interactive chatbot
  const flow = {
    start: {
      message: (params: Params) => {
        params.injectMessage(
          'Hello 👋! Did you know? The order of specifying themes matters!'
        );
        return 'Try previewing some themes below, or click on those on the left! 😊';
      },
      checkboxes: { items: ['Minimal Midnight', 'Cyborg', 'Terminal'] },
      function: (params: Params) => {
        setPreviewIds(
          params.userInput.split(',').map((theme) => {
            if (theme === 'Minimal Midnight') {
              return 'minimal_midnight';
            } else if (theme === 'Cyborg') {
              return 'cyborg';
            } else {
              return 'terminal';
            }
          })
        );
      },
      chatDisabled: true,
      path: 'end',
    },
    end: {
      message: "What's next? 😊",
      options: ['Try Again', 'Check Documentation', 'Discord'],
      path: (params: Params) => {
        if (params.userInput === 'Try Again') {
          setPreviewIds([]);
        } else if (params.userInput === 'Discord') {
          window.open('https://discord.gg/6R4DK4G5Zh');
        } else if (params.userInput === 'Check Documentation') {
          window.open('https://react-chatbotify.com');
        } else {
          setPreviewIds([]);
          params.injectMessage(
            "Hmmm I'm not sure what you said, but let's try again!"
          );
        }
        return 'start';
      },
    },
  };

  console.log(previewIds)

  return (
    <div className="h-screen bg-accent-800 p-5 w-[45rem] flex flex-col items-center">
      <div className="text-accent-50 mb-12 w-full">
        <h2 className="text-2xl font-semibold">Preview</h2>
        <h3 className="text-accent-400">{previewIds.length} theme(s) selected</h3>
      </div>
      <ChatBot
        flow={flow}
        themes={previewIds.map((themeId) => ({ id: themeId }))}
        settings={{ general: { embedded: true } }}
        styles={{ chatWindowStyle: { height: '50vh' } }}
      />
      <div className="w-full mt-8">
        {previewIds.map((previewId) => {
          const previewTitle = formatPreviewIdToTitleCase(previewId)
          return <div className="flex justify-between my-2">
            <span className="text-accent-50 font-semibold text-lg">{previewTitle}</span>
            <span className="text-blue-500 font-semibold">Remove Selection (x)</span>
          </div>
        })}
      </div>
      <div className="flex flex-col p-3 w-full items-center">
        <button className="bg-accent-700 text-accent-400 text-lg py-2 rounded-lg my-2 w-[90%] hover:bg-accent-600 hover:text-accent-300">Download theme bundle</button>
        <button className="bg-accent-300 text-accent-950 text-lg py-2 rounded-lg my-2 w-[90%] hover:bg-accent-200">Edit in theme builder</button>
      </div>
    </div>
  );
};

export default DesktopThemePreview;
