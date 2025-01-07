To run the client locally, navigate through react-app folder then run **npm run build**. This would build a dist folder that the index.ts references to
Run the express server by navigating to the root folder (folder in which index.ts is located) then run **npm run start** this server would point out to the dist folder created by the previous step.
Now the express js server would be serving your APIs and pointing to your client side application.
