# EIKA Shopping List

This project is a ReactJS project that is created for learning purposes for the company of Novare Potential.

## Usage

If this is your first time to enter this app, you will see the home page. After that we will be automatically directed to the shopping page.
In the shopping page, you will be able to add new items to your shopping list. You can add an item by adding its name and its price.
After adding an item, you can mark it as completed / uncompleted and you can delete it.
You can select to view: all the items / the completed items / uncompleted items.

## Available Scripts and Prerequisets

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In order to run the project you should install [nodejs] (https://nodejs.org/en/).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Live Application URL

You can access this application on the web.
Click on the link to see on the application: (https://eika-shopping-list-e347a.web.app/)

## Application design

### Main Pages

#### HomePage:

This is a welcome page that you will see when you enter the app for the first time. It includes some basic elements.

#### ShopPage:

This is the page that has the basic components for this project. You can create / edit your items here. It is the parent component for other main components that are responsible for the list. It also contains the filtering technique that is used to view the items.

### Main Components

#### Modal:

This component takes the valuse of the item as a form input and updates the states to the ShopPage.

#### ItemList:

This component passes and updates the states to the item component according to the chosen view filter.

#### Item:

This component displays each filtered item and handles the deleted/ completed items.

## License

[MIT](https://choosealicense.com/licenses/mit/)
