import FullScreenIcon from '../icons/full-screen';

export interface CombinedElement extends HTMLElement, IElementFullScreen {}
export interface CombinedDocument extends Document, IDocumentFullscreen {}

async function requestFullScreen(element: CombinedElement) {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
  }
  else if (element.webkitRequestFullscreen) {
    await element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    await element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    await element.msRequestFullscreen();
  }
}

async function exitFullScreen() {
  const doc = document as CombinedDocument;

  if (doc.exitFullscreen) {
    await doc.exitFullscreen();
  }
  else if (doc.mozCancelFullScreen) {
    await doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    await doc.webkitExitFullscreen();
  } else if (doc.msExitFullscreen) {
    await doc.msExitFullscreen();
  }
}

function checkFullScreen(){
  const doc = document as CombinedDocument;

  return doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement;
}

interface IDocumentFullscreen {
  exitFullscreen: () => Promise<void>;
  mozCancelFullScreen: () => Promise<void>;
  webkitExitFullscreen: () => Promise<void>;
  msExitFullscreen: () => Promise<void>;
  mozFullScreenElement: Element | null;
  webkitFullscreenElement: Element | null;
  msFullscreenElement: Element | null;
}

interface IElementFullScreen {
  requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  webkitRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  mozRequestFullScreen: (options?: FullscreenOptions) => Promise<void>;
  msRequestFullscreen: () => Promise<void>;
}

const FullScreenButton = () => {
  const element = document.querySelector('.player') as CombinedElement;

  const onFullScreenClick = async () => {
    if (checkFullScreen()) {
      await exitFullScreen();
    } else {
      await requestFullScreen(element);
    }
  };

  return (
    <button type='button' className='player__full-screen' onClick={onFullScreenClick}>
      <FullScreenIcon />
      <span>Full screen</span>
    </button>
  );
};

export default FullScreenButton;
