---
sidebar_position: 1
---

# Setup Backend

In this initial section, we'll focus on the backend setup. But before we dive into the technical details, let's take a moment to get familiar with the key components of our backend architecture

1. **Node.js Server**

2. **Express.js Framework**

3. **MongoDB Database**

4. **Mongoose ODM**

## Prepare your local machine

There are no specific system requirements to run this project, you just need to make sure that you are able to run a NodeJS server

### Prerequisites:

| Prerequisite                                                                                     | Version | Notes                           |
| ------------------------------------------------------------------------------------------------ | ------- | ------------------------------- |
| [Node.js](https://nodejs.org/en)                                                                 | 18.x    | We use the "Active LTS" version |
| [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)                         | 9.x     | -                               |
| [MongoDB Community Server](https://www.mongodb.com/docs/manual/administration/install-community) | 6.0.x   | -                               |

:::tip
If you have a different version, please install the recommended version. We can only support installation issues for recommended versions.
:::

<br />
If Node.js is already installed on your machine, run the following commands to validate the versions:

```sh
node -v
npm -v
```

**Follow these steps to get your development environment ready:**

1. Install [Git](https://git-scm.com) or your favorite Git client, if you haven't already. Update to the latest version.

2. (Optional but recommended) [Set up an SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) for GitHub.

3. Install a code editor of your choice. If you aren't sure which one to use, we recommend [Visual Studio Code](https://code.visualstudio.com) — it's free and open source.

4. Set up linting for your code editor.

You should have [ESLint running in your editor](https://eslint.org/docs/latest/use/integrations.html), and it will highlight anything that doesn't conform to project linting configuration.

:::tip
Please do not ignore any linting errors. They are meant to help you and to ensure a clean and simple codebase.
:::

## Fork the Repository on GitHub

Forking is a step where you get your own copy of Natour's main repository (a.k.a repo) on GitHub.

This is essential, as it allows you to work on your own copy of project on GitHub, or to download (clone) your repository to work on locally. Later, you will be able to request changes to be pulled into the main repository from your fork via a pull request (PR).

:::note
The main repository at `https://github.com/ArunBohra12/natours-backend` is often referred to as the upstream repository.

Your fork at `https://github.com/YOUR_USER_NAME/natours-backend` is often referred to as the origin repository. `YOUR_USER_NAME` would be replaced with your GitHub username.
:::

Follow these steps to fork the `https://github.com/ArunBohra12/natours-backend` repository:

1. Go to the `natours-backend` repository on GitHub: `https://github.com/ArunBohra12/natours-backend`

2. Click the "Fork" Button in the upper right-hand corner of the interface ([More Details Here](https://docs.github.com/en/get-started/quickstart/fork-a-repo))

3. After the repository has been forked, you will be taken to your copy of the `natours-backend` repository at `https://github.com/YOUR_USER_NAME/natours-backend` (`YOUR_USER_NAME` would be replaced with your GitHub user name.)

## Clone your Fork from GitHub

When you clone a repository, you copy the repository from GitHub.com to your local machine. Cloning a repository pulls down a full copy of all the repository data that GitHub.com has at that point in time, including all versions of every file and folder for the project.

**Run these commands on your local machine:**

1. Open a Terminal / Command Prompt / Shell in your projects directory

```sh
i.e.: /yourprojectsdirectory/
```

2. Clone your fork of natours-backend, replacing YOUR_USER_NAME with your GitHub Username

```sh
git clone --depth=1 https://github.com/YOUR_USER_NAME/natours-backend.git
```

This will download the entire natours-backend repository to your projects directory.

:::note
--depth=1 creates a shallow clone of your fork, with only the most recent history/commit. If you want, you can remove this too.
:::

## Set up Syncing from Parent

Now that you have downloaded a copy of your fork, you will need to set up an `upstream` remote to the parent repository.

As mentioned earlier, the main repository is referred to as the `upstream` repository. Your fork is referred to as the origin repository.

You need a reference from your local clone to the `upstream` repository in addition to the `origin` repository. This is so that you can sync changes from the main repository without the requirement of forking and cloning repeatedly.

1. Change directory to the new `natours-backend` directory:

```sh
cd natours-backend
```

2. Add a remote reference to the main natours-backend repository:

```sh
git remote add upstream https://github.com/ArunBohra12/natours-backend.git
```

3. Ensure the configuration looks correct:

```sh
git remote -v
Copy to clipboardErrorCopied
```

The output should look something like below (replacing YOUR_USER_NAME with your GitHub username):

```sh
origin https://github.com/YOUR_USER_NAME/natours-backend.git (fetch)
origin https://github.com/YOUR_USER_NAME/natours-backend.git (push)
upstream https://github.com/ArunBohra12/natours-backend.git (fetch)
upstream https://github.com/ArunBohra12/natours-backend.git (push)
```

## Running Backend Application Locally

Now that you have a local copy of `natours-backend`, you can follow these instructions to run it locally.

If you do run into issues, first perform a web search for your issue and see if it has already been answered. If you cannot find a solution, please search our [GitHub issues](https://github.com/ArunBohra12/natours-backend/issues) page for a solution and report the issue if it has not yet been reported.

### Configuring Dependencies

#### Step 1: Set up the Environment Variable File

The default API keys and environment variables are stored in the file .env.example. This file needs to be copied to a new file named .env

```sh
# Create a copy of the ".env.example" and name it ".env".

# Populate it with the necessary API keys and secrets:
```

All the keys in the .env file are not required to be changed to run the app locally. However, there are some environment specific variables that you might need to change. Following are the ones:

- PORT=8000
- DATABASE_URL=mongodb://127.0.0.1:27017/natours

:::caution
Keep in mind if you want to use services like Cloudinary, you'll have to acquire your own API keys for those services and edit the entries accordingly in the .env file.
:::

#### Step 2: Install Dependencies

This step will install the dependencies required for the application to run:

```sh
npm install
```

#### Step 3: Start MongoDB Server

Make sure the MongoDB server on your machine is up and running.

#### Step 4: Start the Natours server

Run the following command in your terminal

```sh
npm run dev
```

This one command will fire up the backend and you should see the following messages on the terminal

- Server running on port 8000
- Connected to the DB

Once ready, open a web browser and visit http://localhost:8000. If the app loads, and you see some response. Congratulations – you're all set! You now have a copy of natours-backend running on your local machine.

## Quick commands reference

A quick reference to the commands that you will need when working locally.

| Command       | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| npm install   | Installs / re-installs all dependencies used in the project |
| npm run dev   | Lets you run the application (intended for dev mode)        |
| npm start     | Lets you run the application (intended for production mode) |
| npm run debug | Allows you to debug the application using `ndb`             |
