### NFT BOTWARS

NFT BOTWARS is a React application that displays a list of bots and allows the user to select their favorite bots. The user can select multiple bots, and the selected bots are displayed in a separate section of the page.

## BotItems

This is a React functional component that renders a list of bots with their avatars, names, and some details, as well as two buttons for each bot: one to show/hide more details and another to select the bot.

# useState

The component uses React hooks, specifically useState. The component defines three state variables using the useState hook: botData to store the bot data, showDetailsIndex to store the index of the bot whose details are currently being shown, and selectedCard to store an array of bots that have been enlisted.

# useEffect

The component uses the useEffect hook to set the initial value of botData to the bots data imported from the ../data file.

# EventHandlers

The component defines three event handler functions: handleClick to toggle the display of a bot's details, handleCardClick to add a bot to the selectedCard array, and handleDeleteCard to remove a bot from the selectedCard array.

The handleClick function is called when the user clicks the "Show Details"/"Hide Details" button for a bot. It toggles the showDetailsIndex state between the index of the selected bot and -1. The details are only shown when the index matches the showDetailsIndex state.

# Return

The component returns a JSX element that displays the bot list and selected bots.

The bot list is displayed as a series of div elements with the card class, and the selectedCard array is displayed as a series of div elements with the cards class.

Each card element displays a bot's image, name, and two buttons: one to show or hide the bot's details, and one to enlist the bot.

When a bot is enlisted, it is added to the selectedCard array, and its card element is highlighted with the selected class. When a bot's details are shown, the showDetailsIndex state variable is updated to the index of the bot.

The selectedCard array is displayed only when it is not empty, and the component also displays a header and horizontal lines to separate the bot list and selected bots.
# Botwars
