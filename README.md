# Responsive Grid System

**Task** - So the task is to make a Responsive Grid System using image and representing its 2D
indexing text over it. Make sure it’s device independent and works for all Screen Types
including Portrait and Landscape. It must be compiled on Mobile Device. Users can change
device Orientation at runtime.

## Technology - Platform 
JS Game Framework (Pixijs + React JS)

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Orientation
Portrait and Landscape

## About Game 
Responsive grid system which covers the whole screen with images and text
over it. For example, we are on portrait mode and we have 1x1 image and we are making a
grid of it and suppose horizontally we can fit only 10 images and vertically 25, so total Images
must be 10x25 = 250 and written a text over each of this image about its indexing, Like for, a
image at row 1 and column 3 should have text over it as (1, 3).


## Game Features
There are a lot of features in task which is explained below-
- **Dynamic Mode** - Images must fill up the screen in both portrait and landscape mode. For Example - we have 10x25 Images in portrait mode then it must be 25x10 in landscape which must auto adjust when the user changes from portrait to landscape at runtime.
- **Showing Images Length and Size** - A text should be there where you have to write, how many Images are there and what&#39;s the scale of a Image.
- **Coloring Image**- Each Image must have different color which must be auto assigned when Images generate i.e each time when user refresh the game the Images color must be different.