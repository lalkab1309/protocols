import React, { useState } from 'react';
import TextInput from './TextInput';
import styles from '../../styles/slidesCreator.module.css'

const SlidesForm = () => {
  const [slides, setSlides] = useState([]);
  const [newSlideText, setNewSlideText] = useState('');

  const handleAddSlide = () => {
    setSlides([...slides, { text: newSlideText }]);
    setNewSlideText('');
  };

  const handleTextChange = (index, text) => {
    setSlides(slides.map((slide, i) => {
      if (i === index) {
        return { ...slide, text };
      }
      return slide;
    }));
  };

  return (
    <div className={styles.main}>
      {slides.map((slide, index) => (
        <div key={index}>
          <TextInput
            type="text"
            value={slide.text}
            onChange={(e) => handleTextChange(index, e.target.value)}
          />
        </div>
      ))}
      
      <button onClick={handleAddSlide}>Добавить слайд</button>
    </div>
  );
};

export default SlidesForm