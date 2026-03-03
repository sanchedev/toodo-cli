# Toodo CLI

A simple task manager for your terminal.

![Node](https://img.shields.io/badge/node-%3E=20-green)
![License](https://img.shields.io/badge/toodo-v1.0.0-brightgreen)

## Instalation

```bash
git clone https://github.com/sanchedev/toodo-cli

cd toodo

npm install

npm link
```

# Usage

```bash
toodo <command> [options]
```

## Commands

- `list` List all tasks.
- `create` Create a new task.
- `show` Show a task by ID.
- `update` Update a task.
- `delete` Delete a task.
- `complete` Mark a task as completed.
- `uncomplete` Mark a task as pending.

## Examples

Create a task with a defined title:

```bash
toodo create -t "Start the project"
```

List all tasks

```bash
toodo list
```

Update a task

```bash
toodo update 2 -t "Refactor code"
```

Mark a task as completed

```bash
toodo complete 8
```

## Development

Run locally:

```bash
node index.js
```
