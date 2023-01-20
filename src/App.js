// import logo from './logo.svg';
import './App.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('buzz');

  // const Url =

  function handleTopChange(e) {
    setTopText(e);
  }

  function handleBottomChange(e) {
    setBottomText(e);
  }

  function handleMemeTemplateChange(e) {
    setMemeTemplate(e);
  }

  return (
    <div>
      <hi>Meme Generator</hi>
      <br />
      <br />

      <label>
        topText
        <input
          className="input"
          name="topText"
          placeholder="top Text"
          value={topText}
          onChange={(e) => handleTopChange(e.target.value)}
        />
      </label>

      <label>
        bottomText
        <input
          className="input"
          name="bottomText"
          placeholder="bottom Text"
          value={bottomText}
          onChange={(e) => handleBottomChange(e.target.value)}
        />
      </label>

      <label>
        Meme template
        <input
          className="input"
          placeholder="meme Template"
          onChange={(e) => handleMemeTemplateChange(e.target.value)}
        />
      </label>

      <button
        onClick={() =>
          saveAs(
            `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}`,
            'image.jpg',
          )
        }
      >
        Download
      </button>
      <br />
      <br />
      <br />
      <img
        data-test-id="meme-image"
        src={`https://api.memegen.link/images/${memeTemplate}/_${topText}/${bottomText}.png`}
        alt="meme"
      />
    </div>
  );
}
