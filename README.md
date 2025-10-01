# Frontegg React Iframe Authentication

A React application demonstrating Frontegg authentication with iframe integration, callback page handling, and responsive design.

## Features

- 🔐 **Frontegg Authentication Integration** - Complete authentication flow with Frontegg
- 🖼️ **Iframe Login Modal** - Embedded login form in a responsive modal
- 🔄 **Callback Page Handling** - Automatic authentication callback processing
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🍪 **Cookie Management** - Automatic cookie handling and cleanup
- ⚡ **Port 3001 Configuration** - Ready to run on port 3001

## Quick Start

### 1. Configure Frontegg

Update your Frontegg configuration in `src/App.tsx`:

```typescript
<FronteggProvider
  contextOptions={{
    baseUrl: "your-frontegg-domain",
    clientId: 'your-client-id'
  }}
  authOptions={{
    keepSessionAlive: true,
  }}
  hostedLoginBox={false}
  customLoader={setFronteggLoading}
>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The app will run on `http://localhost:3001`

## Project Structure

```
src/
├── components/
│   ├── AccountInfo.tsx          # User account information display
│   ├── CallbackPage.tsx         # Authentication callback handler
│   ├── FronteggLoginIframe.tsx  # Iframe login modal component
│   ├── Header.tsx               # Application header
│   ├── Main.tsx                 # Main application component
│   └── ...                      # Other UI components
├── App.tsx                      # Main app with routing
├── App.css                      # Responsive styles
└── index.tsx                    # Application entry point
```

## Key Components

### CallbackPage
Handles authentication callbacks from Frontegg:
- Detects iframe context
- Closes modal and reloads parent window
- Shows success/error states

### FronteggLoginIframe
Modal component for iframe authentication:
- Responsive modal design
- Manual close functionality
- Loading states

### Responsive Design
Mobile-first CSS with breakpoints:
- Tablet (≤768px): Stacked layout
- Mobile (≤480px): Compact design
- Text wrapping for long content

## Configuration

### Port Configuration
The app is configured to run on port 3001. To change:

```json
// package.json
"scripts": {
  "start": "PORT=3001 react-scripts start"
}
```

### Frontegg Setup
1. Get your Frontegg domain and client ID from the Frontegg Portal
2. Update the configuration in `src/App.tsx`
3. Add `http://localhost:3001` to allowed origins in Frontegg

## Authentication Flow

1. User clicks "Sign In" → Opens iframe modal
2. User authenticates in iframe → Redirects to callback page
3. Callback page processes authentication → Closes modal
4. Main app reloads → Shows authenticated state

## Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Customization

- **Styling**: Modify `src/App.css` for custom styles
- **Components**: Update components in `src/components/`
- **Routing**: Add routes in `src/App.tsx`
- **Configuration**: Update Frontegg settings in `src/App.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a starting point for your own applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues and questions:
- Check the [Frontegg Documentation](https://docs.frontegg.com/)
- Open an issue in this repository