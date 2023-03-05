import './App.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

// creating a useState variable
export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('buzz');

  // A function for the declared variable above

  function handleTopChange(e) {
    setTopText(e);
  }

  function handleBottomChange(e) {
    setBottomText(e);
  }

  function handleMemeTemplateChange(e) {
    setMemeTemplate(e);
  }

  const memeUrl = (memes, top, bottom) => {
    return !top && !bottom
      ? `https://api.memegen.link/images/${memes}.png`
      : !bottom
      ? `https://api.memegen.link/images/${memes}/${top}.png`
      : !top
      ? `https://api.memegen.link/images/${memes}/_/${bottom}.png`
      : `https://api.memegen.link/images/${memes}/${top}/${bottom}.png`;
  };

  return (
    <div>
      <hi className="Form">Meme Generator</hi>

      <br />
      <br />

      {/* The label element for Top text */}
      <label>
        Top text
        <input
          className="input"
          name="topText"
          placeholder="top Text"
          value={topText}
          onChange={(e) => handleTopChange(e.target.value)}
        />
      </label>

      {/* The label element for Bottom text */}
      <label>
        Bottom text
        <input
          className="input"
          name="bottomText"
          placeholder="bottom Text"
          value={bottomText}
          onChange={(e) => handleBottomChange(e.target.value)}
        />
      </label>

      {/* The label element for Meme template */}
      <label>
        Meme template
        <input
          className="input"
          placeholder="meme Template"
          onChange={(e) => handleMemeTemplateChange(e.target.value)}
        />
      </label>
      <br />
      <br />
      {/* Creating a download button and using the file-saver package to save the images */}

      <br />
      <br />
      <br />

      {/* An image element containing the memes link and also an ternary declaration */}

      <img
        className="img"
        data-test-id="meme-image"
        src={memeUrl(memeTemplate, topText, bottomText)}
        alt="meme"
      />
      <br />
      <br />
      <button
        className="button"
        onClick={() =>
          saveAs(
            `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}`,
            'image.jpg',
          )
        }
      >
        Download
      </button>
    </div>
  );
}
