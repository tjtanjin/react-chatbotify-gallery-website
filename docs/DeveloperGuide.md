<p align="center">
  <img width="200px" src="https://raw.githubusercontent.com/tjtanjin/react-chatbotify/main/assets/logo.png" />
  <h1 align="center">React ChatBotify Gallery Website</h1>
</p>

## Table of Contents

* [Introduction](#introduction)
* [Navigating this Developer Guide](#navigating-this-developer-guide)
* [Design](#design)
* [Implementation](#implementation)
* [Code Documentation](#code-documentation)
* [Testing](#testing)
* [Final Notes](#final-notes)

<div  style="page-break-after: always;"></div>

## Introduction

Welcome to the Developer Guide for the React Chatbotify Gallery Website project. Before diving into this guide, ensure you have gone through the project [*README*](https://github.com/your-repo/react-chatbotify-gallery-website/blob/main/README.md) for an overview. This guide assumes you have a **basic understanding** of [**React**](https://reactjs.org/), [**TypeScript**](https://www.typescriptlang.org/) and [**TailwindCSS**](https://tailwindcss.com/). In addition, you should also be familiar with [**React ChatBotify**](https://react-chatbotify.com), which is the core library that this project complements.

## Navigating this Developer Guide

To facilitate your reading, take note of the following syntaxes used throughout this guide:

| Syntax | Description |

|----------------------|-----------------------------------------------------------------------------------|

| `Code` | Denotes functions, components, or code-related references (e.g., `App`, `useEffect`) |

| *Italics* | Refers to folder or file names (e.g., *App.js*, *components*) |

| **Bold** | Highlights important keywords or concepts |

<div  style="page-break-after: always;"></div>

## Setup

Setting up the project is relatively simple. Before you begin, ensure that you have **at least NodeJS 16.x** installed (this project was first developed on v20.3.1).
1) Fork the [project repository](https://github.com/tjtanjin/react-chatbotify-gallery-website).
2) Clone the **forked project** into your desired directory with:
    ```
    git clone {the-forked-project}.git
    ```
3) Next, `cd` into the project and install dependencies with:
    ```
    npm install
    ```
4) Once installations are complete, you may launch the project with:
    ```
    npm run start
    ```

## Design

### Overview

**To be updated with the project folder structure**

## Project Management

### GitHub Projects & Issues

The progress of the project is tracked using [**GitHub Projects**](https://github.com/users/tjtanjin/projects/6) and [**issues**](https://github.com/tjtanjin/react-chatbotify-gallery-website/issues). The project board is updated each sprint (conducted bi-weekly), and team members will provide their updates within discord. For each sprint, there will be epic issue(s) that serves as the overall goal for the sprint. Individual developers will be assigned smaller bite-size issues to tackle, which will contribute towards resolving the epic issues by the end of the sprint.

### Forking Workflow
This project adopts the [**Forking Workflow**](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow). In short, here are the steps required:
1) Fork the repository
2) Clone the forked repository to your local device
3) Make your code changes
4) Push to your forked remote repository
5) Open a pull request from your forked repository to the upstream repository (i.e. the main repository)

In addition, developers should fill up the pull requests template diligently. This ensures that changes are well-documented and reviewed before merging.

### Commit Messages
This project adopts [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/), with a minor difference that **the first word after the commit type is always capitalised**. For example, notice how "A" in "Add" is capitalised in this commit message: `feat: Add initial theme builder layout`.

## Code Documentation

Adhering to code documentation best practices is crucial for maintainability. Each file should start with a brief description of its purpose. Functions and components should include comments where necessary, especially for complex logic. A typical comment structure is as follows:

```javascript
/**
* Fetches gallery themes from the backend.
* @param  {number}  page - The page number to fetch
* @param  {number}  limit - The number of themes per page
* @returns {Promise<Array>} An array of gallery themes
*/
async function fetchGalleryItems(page, limit) {
  // Implementation...
}
```
The above shows an example code comment for a function that fetches gallery themes from the backend server.

Finally, any leftover tasks or areas in the code to be revisited should be flagged with a comment like the one below:

```
// todo: tj to optimize the calculation code here
```

That way, we can identify what are the tasks to finish up here and optionally, state who will be responsible for it.

## Testing

To be updated

## Final Notes

The designs in this project are not perfect. We encourage experienced developers to help seek out areas for **improvements** in the application! We value your input and welcome contributions to enhance the chatbot. Happy coding!