# WhatsApp Clipboard Link Generator

A simple and efficient web application to generate WhatsApp chat links (`wa.me`) with a phone number and an optional pre-filled message. You can copy the link to your clipboard or open the chat directly. The application also generates a QR code for the link, making it easy to open the chat on your mobile device.

## Key Features

- **Generate `wa.me` links:** Quickly generate WhatsApp chat links.
- **Pre-filled Message:** Include an optional message that will be pre-filled in the chat.
- **Copy to Clipboard:** Easily copy the generated link with a single click.
- **Direct Chat:** Open the chat directly in WhatsApp.
- **QR Code Generation:** Generate a QR code for the `wa.me` link to open it on your phone.
- **Phone Number Validation:** Ensures that the phone number is valid before generating the link.
- **Country Code Support:** Includes international phone number input with country code selection.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or a compatible package manager like Yarn or pnpm) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Thiago-spart/whatsapp_clipboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd whatsapp_direct_contact
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified files for production. You can preview the production build with `npm run preview`.

## Usage

1. Open the application in your browser.
2. Enter the phone number with the country code.
3. Optionally, type a message to be pre-filled.
4. Click "Copiar link" to copy the generated link to your clipboard.
5. Click "Entrar em conversa" to open the chat directly in WhatsApp.
6. Scan the QR code with your phone to open the chat on your mobile device.

## Technology Stack

- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A fast build tool and development server.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [@tanstack/react-router](https://tanstack.com/router/v1) - A fully type-safe router for React.
- [lucide-react](https://lucide.dev/) - A beautiful and consistent icon set.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [react-phone-number-input](https://github.com/catamphetamine/react-phone-number-input)
- [react-qr-code](https://github.com/rosskhanas/react-qr-code)
