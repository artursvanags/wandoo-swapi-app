# Star Wars SWAPI Website

This is a Star Wars character encyclopedia web application built as part of a homework assignment. The application is built using the provided tech stack, while adhering to a mobile-first design approach. This app allows users to explore detailed information about characters from the Star Wars universe using the SWAPI. 

It uses React for the user interface, GraphQL with Apollo Client to fetch character data from the SWAPI, Tailwind CSS for styling, and Next.js for application initialization. The project also utilizes Shadcn and Redux for UI.

You can view the live version of the application at [https://wandoo-swapi-app.vercel.app/](https://wandoo-swapi-app.vercel.app/)

## Getting Started

To get started with the project, follow these steps:

1. Copy the `.env.template` file and rename it to `.env`. You can do this via the command line with the following command:
   ```bash
   cp .env.template .env
   ```
2. Open the terminal and navigate to the project directory. You can do this via the command line with the following command (replace 'project-directory' with the actual directory name):
   ```bash
   cd project-directory
   ```
3. Install all dependencies by running the following command:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server by running the following command:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Features

- **Mobile-first design:** The application is designed with a mobile-first approach, ensuring optimal user experience on mobile devices.
- **Built-in error handling:** The application has robust error handling mechanisms in place to ensure smooth user experience.
- **Detailed Star Wars Characters Information:** The application provides comprehensive information about Star Wars characters, including their species, homeworlds, and other relevant details.
- **Advanced Search & Filtering:** Users can search for characters by name and use a filter option to sort characters alphabetically. The application also supports slug parameters for easier sharing of search results.
- **UI State Management:** The application uses Shadcn and Redux for managing the UI state, providing a responsive and seamless user experience.
- **Font Optimization:** The project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter and CalSans, custom Google Fonts, ensuring fast load times and a visually appealing interface. The CalSans font is loaded from local files.
- **Theme Toggle Functionality:** The application includes a theme toggle feature that allows users to switch between light and dark modes. This feature is added for easier eye strain reduction. It also uses system settings to determine the default UI theme.

## Future Roadmap

To further improve the application, the following features could be considered for future development:

- **Image API Integration:** Integrate an Image API to fetch and display images of the Star Wars characters. This would enhance the visual appeal and user experience of the application.
- **Expanded Data:** Increase the amount of data available for each character. This could include more detailed background stories, affiliations, and appearances in different Star Wars media.
- **Additional Filtering Options:** Implement more advanced filtering options, such as by species, homeworld, or appearances in films. This would allow users to find characters based on more specific criteria.
- **User Accounts:** Implement user accounts with the ability to save favorite characters and settings. This would personalize the user experience and allow users to easily access their favorite characters.
- **Community Features:** Add features such as character ratings, user comments, and forums. This would foster a community of users who can share their thoughts and opinions on the characters.

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.