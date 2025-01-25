export const createContainerElement = (): HTMLDivElement => {
  const container = document.createElement('div');
  container.className = 'container max-w-lg mx-auto p-3 sm:p-10';
  container.innerHTML = `
      <h1 class="text-2xl sm:text-3xl font-bold mb-0.5">
          <span class="text-slate-500 border-b-3 border-double"
            >Fun Alphabet</span
          >
          Reader
        </h1>
        <p class="text-sm sm:text-base">Click a letter to hear it!</p>
        <div class="flex justify-end my-5">
          <select
            class="text-sm focus:outline-none focus:ring-1 rounded-md"
            id="voice-select"
          ></select>
        </div>
        <div
          id="alphabet-container"
          class="alphabet-container grid grid-cols-8 gap-5 mt-5"
        ></div>
    `;
  return container;
};

export const runApp = () => {
  // Set up Speech Synthesis
  const synth = window.speechSynthesis;
  let voices: SpeechSynthesisVoice[] = [];

  // Alphabet letters with associated fun words
  const alphabet = [
    { letter: 'A', word: 'Apple' },
    { letter: 'B', word: 'Banana' },
    { letter: 'C', word: 'Cat' },
    { letter: 'D', word: 'Dog' },
    { letter: 'E', word: 'Elephant' },
    { letter: 'F', word: 'Fish' },
    { letter: 'G', word: 'Giraffe' },
    { letter: 'H', word: 'Hat' },
    { letter: 'I', word: 'Ice Cream' },
    { letter: 'J', word: 'Jelly' },
    { letter: 'K', word: 'Kangaroo' },
    { letter: 'L', word: 'Lion' },
    { letter: 'M', word: 'Monkey' },
    { letter: 'N', word: 'Nose' },
    { letter: 'O', word: 'Orange' },
    { letter: 'P', word: 'Pineapple' },
    { letter: 'Q', word: 'Queen' },
    { letter: 'R', word: 'Rabbit' },
    { letter: 'S', word: 'Sun' },
    { letter: 'T', word: 'Tiger' },
    { letter: 'U', word: 'Umbrella' },
    { letter: 'V', word: 'Violin' },
    { letter: 'W', word: 'Whale' },
    { letter: 'X', word: 'Xylophone' },
    { letter: 'Y', word: 'Yak' },
    { letter: 'Z', word: 'Zebra' },
  ];

  // DOM Elements
  const alphabetContainer = document.getElementById(
    'alphabet-container'
  ) as HTMLDivElement;
  const voiceSelect = document.getElementById(
    'voice-select'
  ) as HTMLSelectElement;

  // Function to load available voices
  function loadVoices() {
    voices = synth.getVoices();
    if (voices.length === 0) {
      setTimeout(loadVoices, 100); // Retry if voices are not yet available
      return;
    }

    voiceSelect.innerHTML = ''; // Clear previous options
    voices.forEach((voice, idx) => {
      const option = document.createElement('option');
      option.value = `${idx}`;
      option.textContent = voice.name + (voice.default ? ' [Default]' : '');
      if ('Google UK English Male' === voice.voiceURI) {
        option.selected = true; // Select a high-quality default voice
      }
      voiceSelect.append(option);
    });
  }

  // Function to create buttons for each letter in the alphabet
  function createAlphabetButtons() {
    alphabet.forEach((item) => {
      const button = document.createElement('button');
      button.textContent = item.letter;
      button.classList.add('alphabet-btn'); // Add class for styling
      button.setAttribute(
        'aria-label',
        `Click to hear the letter ${item.letter}`
      );
      button.addEventListener('click', () =>
        speakLetter(item.letter, item.word)
      );
      alphabetContainer.appendChild(button);
    });
  }

  // Function to speak the letter and the associated word
  function speakLetter(letter: string, word: string) {
    const utterance = new SpeechSynthesisUtterance(`${letter}, for ${word}.`);
    utterance.pitch = 1.2; // Fun, higher pitch!
    utterance.rate = 1; // Normal speaking speed
    utterance.volume = 1; // Maximum volume (range: 0 - 1)
    const selectedVoice = voices[+voiceSelect.value];
    if (selectedVoice) utterance.voice = selectedVoice;
    synth.speak(utterance);
  }

  // Error handling for speech synthesis (if not available)
  if (!synth) {
    alert('Speech synthesis is not supported in your browser.');
    return;
  }

  // Initialize the app
  createAlphabetButtons();
  synth.onvoiceschanged = loadVoices;
  loadVoices();
};
