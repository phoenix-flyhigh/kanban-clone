import { Task, TaskStatus } from "./Interfaces";

export const MockTaskList: Task[] = [
  {
    title: "Build UI for onboarding flow",
    description:
      "Build ui to onboard users in the application with valid authentication",
    subTasks: [
      {
        title: "subtask 1",
        completed: false,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
  {
    title: "Build UI for search",
    description:
      "Build ui to search in the application with valid authentication",
    subTasks: [
      {
        title: "subtask 1",
        completed: true,
      },
      {
        title: "subtask 2",
        completed: false,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
  {
    title: "Add search endpoints",
    description:
      "Add search endpoint in backend for making api calls with search query",
    subTasks: [
      {
        title: "sub task1",
        completed: false,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
  {
    title: "Add account management endpoints",
    description:
      "Add auth endpoint in backend for making api calls with user credentials",
    subTasks: [
      {
        title: "subtask 1",
        completed: false,
      },
      {
        title: "subtask 2",
        completed: false,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
  {
    title: "Performance testing",
    description:
      "Perform load testing using gatling and assess performance of application",
    subTasks: [
      {
        title: "sub task 1",
        completed: false,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
  {
    title: "Research market",
    description:
      "Research market to understand the pain points and user requirements",
    subTasks: [
      {
        title: "sub task 1",
        completed: true,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
  {
    title: "Market analysis",
    description:
      "Find about competitor products and the gaps between market and user needs to find target",
    subTasks: [
      {
        title: "sub task 1",
        completed: true,
      },
    ],
    status: {
      title: TaskStatus.TODO,
      boardTitle: "Platform Launch",
    },
  },
];
