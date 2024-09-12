# Todo List Application

This is a simple Todo List application built using **React**. The app allows users to add, delete, and mark tasks as completed. The user interface is designed with basic styling, including a color scheme that highlights the task list, buttons, and input fields.

## Features

- **Add new tasks**: Users can type a task into the input field and click the "Add Todo" button to add it to the list.
- **Delete tasks**: Each task in the list has a delete button (red "x") that can be clicked to remove individual tasks.
- **Mark tasks as completed**: Users can mark tasks as completed using the checkbox next to each task.
- **Delete selected tasks**: The "Delete Selected" button allows users to remove multiple completed tasks at once.

## Preview

### Initial Preview:
![Screenshot](./Screenshot1.png)

### Another View:
![Screenshot](./Screenshot2.png)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Custom styling for the app components.
- **HTML**: Structure and layout of the app.

## Installation and Setup Instructions

To get started with the Todo List app, follow the steps below:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/todo-list-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd todo-list-app
   ```

3. **Install dependencies**:
   Use npm or yarn to install the necessary dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Run the application**:
   Start the React development server to run the app:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. **View the app**:
   Open your browser and navigate to `http://localhost:3000` to view the app.

## File Structure

```bash
todo-list-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Todo.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

- **App.js**: Contains the main structure of the app and handles state management for tasks.
- **Todo.js**: A reusable component for rendering each task in the list.
- **App.css**: Contains the styling for the application, including input fields, buttons, and list items.

## Customization

You can customize the app by modifying the following files:

- **App.css**: Change the styles, colors, or layout of the app.
- **App.js**: Add new features such as task filtering or task priority.
- **Todo.js**: Customize the display and functionality of each task.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

