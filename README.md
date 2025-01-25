# Fun Alphabet Reader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![Vite](https://img.shields.io/badge/Built%20with-Vite-blue)](https://vitejs.dev/)  
[![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-06B6D4)](https://tailwindcss.com/)  
[![TypeScript](https://img.shields.io/badge/Code-TypeScript-3178C6)](https://www.typescriptlang.org/)

An engaging and interactive web app that helps users learn the alphabet in a fun way! Each letter corresponds to a word and is read aloud using the browser's Speech Synthesis API.

## Live Demo

[**Try the Fun Alphabet Reader**](https://funabc.nixx.dev)

## Features

- **Interactive Buttons:** Buttons for each letter of the alphabet.
- **Speech Synthesis:** Reads the letter and its associated word aloud.
- **Voice Selection:** Choose from available voices in your browser.
- **Modern Design:** Styled with Tailwind CSS and SCSS for a sleek and responsive UI.

## Technologies Used

- **[Vite](https://vitejs.dev/):** Fast and modern build tool.
- **[TypeScript](https://www.typescriptlang.org/):** Ensures type safety and code quality.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid styling.
- **SCSS:** Provides enhanced styling capabilities.
- **Speech Synthesis API:** Built-in browser feature for text-to-speech.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/justnixx/fun-alphabet-reader.git
   cd fun-alphabet-reader
   ```

2. **Install Dependencies:**

   ```bash
   yarn
   ```

3. **Run the Development Server:**

   ```bash
   yarn dev
   ```

4. **Build for Production:**

   ```bash
   yarn build
   ```

5. **Preview the Production Build:**

   ```bash
   yarn preview
   ```

## File Structure

```
fun-alphabet-reader/
├── public/          # Static assets
├── src/             # Source code
|   ├── app.ts       # Core app logic
│   ├── main.ts      # Entry point
│   ├── index.html   # HTML structure
│   ├── index.scss   # Styling
│   └── ...          # Other files
├── package.json     # Project configuration
├── vite.config.ts   # Vite configuration
└── README.md        # Project documentation
```

## Usage

1. Open the application in your browser.
2. Select a voice from the dropdown menu.
3. Click any letter button to hear the letter and its associated word read aloud.

## Customization

- Modify the `alphabet` array in `app.ts` to include custom words for each letter.
- Add or remove styles by editing the `index.scss` file.
- Experiment with additional Speech Synthesis API features such as pitch and rate adjustments.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
