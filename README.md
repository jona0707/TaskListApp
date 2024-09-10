# Aplicación de Lista de Tareas con Base de Datos
![capApp](/capApp.png)
### Descripción del proyecto
Este proyecto es una aplicación de lista de tareas desarrollada con el stack **MERN** (MySQL, Express, React, Node.js) y **Vite** para el frontend. La aplicación permite agregar, eliminar y marcar como completadas las tareas, almacenándolas en una base de datos.

## Características
- **Frontend** desarrollado con **React** y **Vite**.
- **Backend** construido con **Node.js**, **Express**, y **MySQL** utilizando **Sequelize**.
- Interacción entre frontend y backend mediante una **API REST** para manejar las tareas.
- Integración de **custom hooks** en el frontend para gestionar la lógica de la lista de tareas.
  
---

## Instrucciones para clonar y ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/jona0707/TaskListApp.git
`````

### 2. Configuración del Backend
#### Requisitos previos
- Node.js
- MySQL
#### Pasos
1. Navega a la carpeta del servidor:
```bash
cd server
`````
2. Instala las dependencias:
```bash
npm install
`````
3. Crear un archivo ````.env```` en la carpeta ````server```` con la siguiente información:
```bash
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
`````
4. Inicia el servidor:
```bash
npm start
`````
El servidor estará corriendo en ````http://localhost:5000````.

### 3. Configuración del Frontend
#### Requisitos previos

* Node.js

#### Pasos
1. Navega a la carpeta del cliente:
```bash
cd client
`````
2. Instala las dependencias:
```bash
npm install
`````
3. Inicia el servidor de desarrollo de vite:
```bash
npm run dev
`````

La aplicación se abrirá en ````http://localhost:5173````.

## Descripción del Proyecto

### Frontend

El frontend está desarrollado con **React** y **Vite**. Utiliza componentes reutilizables y hooks personalizados para gestionar el estado de la lista de tareas.

#### Componentes Principales

- **ListApp**: Componente principal que renderiza la lista de tareas y el formulario para agregar nuevas tareas.
- **ListItem**: Representa cada tarea individual con la opción de eliminarla o marcarla como completada.
- **AddItem**: Componente que permite añadir nuevas tareas.
- **Footer**: Componente que muestra información del desarrollador y los proveedores de servicios utilizados.

#### Custom Hooks

- **useControlList**: Custom hook encargado de manejar las operaciones de la lista de tareas. Implementa las funciones para agregar, eliminar, y marcar tareas como completadas, conectándose al backend mediante las API.

   - **list**: Estado que contiene la lista de tareas.
   - **handleAddItem**: Función para agregar una nueva tarea.
   - **handleDelItem**: Función para eliminar una tarea.
   - **handleCrossItem**: Función para marcar una tarea como completada.
  
- **useForm**: Custom hook para manejar los inputs del formulario de agregar tareas, permitiendo un manejo sencillo del estado del formulario.

### Estilos

Los estilos de la aplicación se gestionan mediante un archivo `index.css`, y se utiliza **Bootstrap** para el diseño responsivo de los componentes.


## API REST

El backend expone una serie de endpoints para interactuar con la base de datos y gestionar las tareas.

- `GET /tasks`: Obtiene todas las tareas.
- `POST /tasks`: Crea una nueva tarea.
- `DELETE /tasks/:id`: Elimina una tarea por su ID.
- `PATCH /tasks/:id`: Actualiza el estado de una tarea (completada o pendiente).


## Tecnologías Utilizadas

- **Frontend**: React, Vite, Bootstrap
- **Backend**: Node.js, Express, Sequelize, MySQL
- **Otros**: Custom hooks, API REST


<br>

# Task List Application with Database
![capApp](/capApp.png)
### Project Description
This project is a to-do list application developed with the **MERN** stack (MySQL, Express, React, Node.js) and **Vite** for the frontend. The application allows users to add, delete, and mark tasks as completed, storing them in a database.

## Features
- **Frontend** developed with **React** and **Vite**.
- **Backend** built with **Node.js**, **Express**, and **MySQL** using **Sequelize**.
- Interaction between frontend and backend via a **REST API** to manage tasks.
- Integration of **custom hooks** in the frontend to manage the task list logic.

---

## Instructions to clone and run the project

### 1. Clone the repository

```bash
git clone https://github.com/jona0707/TaskListApp.git
````
### 2. Backend Configuration
#### Prerequisites
- Node.js
- MySQL
#### Steps
1. Navigate to the ````server```` folder:
```bash
cd server
`````
2. Install the dependencies:
```bash
npm install
`````
3. Create a ````.env```` file in the ````server```` folder with the following information:
```bash
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
`````
4. Start the server:
```bash
npm start
`````
The server will be running at ````http://localhost:5000````.

### 3. Frontend Configuration
#### Prerequisites

* Node.js

#### Steps
1. Navigate to the ````client```` folder:
```bash
cd client
`````
2. Install the dependencies:
```bash
npm install
`````
3. Start the Vite development server:
```bash
npm run dev
`````

The application will open at  ````http://localhost:5173````.


## Project Description

### Frontend
The frontend is developed with **React** and **Vite**. It uses reusable components and custom hooks to manage the state of the task list.

#### Main Components
- **ListApp**: Main component that renders the task list and the form to add new tasks.
- **ListItem**: Represents each individual task with the option to delete or mark it as completed.
- **AddItem**: Component that allows adding new tasks.
- **Footer**: Component that displays developer information and the services providers used.

#### Custom Hooks
- **useControlList**: Custom hook responsible for handling the task list operations. It implements the functions to add, delete, and mark tasks as completed, connecting to the backend through APIs.

   - **list**: State that holds the list of tasks.
   - **handleAddItem**: Function to add a new task.
   - **handleDelItem**: Function to delete a task.
   - **handleCrossItem**: Function to mark a task as completed.

- **useForm**: Custom hook to handle the form inputs for adding tasks, allowing for easy form state management.

### Styles
The app’s styles are managed through an `index.css` file, and **Bootstrap** is used for responsive design of the components.



## REST API
The backend exposes a series of endpoints to interact with the database and manage tasks.

- **GET /tasks**: Fetches all tasks.
- **POST /tasks**: Creates a new task.
- **DELETE /tasks/:id**: Deletes a task by its ID.
- **PATCH /tasks/:id**: Updates the status of a task (completed or pending).



## Technologies Used
- **Frontend**: React, Vite, Bootstrap
- **Backend**: Node.js, Express, Sequelize, MySQL
- **Others**: Custom hooks, REST API
