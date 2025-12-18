import React from "react";

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    name: "Rahul Sharma",
    email: "employee1@example.com",
    password: "123",

    taskNumber: 4,
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskId: 101,
        title: "Prepare Sales Report",
        description: "Create monthly sales performance report",
        date: "2025-01-10",
        time: "10:30 AM",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskId: 102,
        title: "Client Follow-up",
        description: "Follow up with potential clients via email",
        date: "2025-01-08",
        time: "02:00 PM",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskId: 103,
        title: "Update CRM",
        description: "Update client data in CRM system",
        date: "2025-01-07",
        time: "04:00 PM",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskId: 104,
        title: "Sales Call",
        description: "Call potential leads",
        date: "2025-01-14",
        time: "11:00 AM",
        category: "Sales",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",

    taskNumber: 4,
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        taskId: 201,
        title: "Design Homepage",
        description: "Create homepage UI design",
        date: "2025-01-11",
        time: "11:00 AM",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskId: 202,
        title: "Fix CSS Bugs",
        description: "Resolve responsive layout issues",
        date: "2025-01-09",
        time: "03:30 PM",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskId: 203,
        title: "Team Meeting",
        description: "Attend weekly design meeting",
        date: "2025-01-08",
        time: "01:00 PM",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskId: 204,
        title: "Logo Redesign",
        description: "Improve brand logo",
        date: "2025-01-14",
        time: "04:00 PM",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    name: "Amit Patel",
    email: "employee3@example.com",
    password: "123",

    taskNumber: 4,
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskId: 301,
        title: "API Integration",
        description: "Integrate payment gateway API",
        date: "2025-01-12",
        time: "09:00 AM",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskId: 302,
        title: "Debug Errors",
        description: "Fix server-side errors",
        date: "2025-01-10",
        time: "05:00 PM",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskId: 303,
        title: "Code Review",
        description: "Review pull requests",
        date: "2025-01-09",
        time: "12:00 PM",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskId: 304,
        title: "Optimize Queries",
        description: "Improve database performance",
        date: "2025-01-14",
        time: "03:00 PM",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    name: "Neha Singh",
    email: "employee4@example.com",
    password: "123",

    taskNumber: 4,
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskId: 401,
        title: "Marketing Plan",
        description: "Create campaign strategy",
        date: "2025-01-13",
        time: "10:00 AM",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskId: 402,
        title: "Social Media Post",
        description: "Schedule promotional posts",
        date: "2025-01-10",
        time: "02:30 PM",
        category: "Social Media",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskId: 403,
        title: "Ad Performance Review",
        description: "Analyze ad metrics",
        date: "2025-01-09",
        time: "04:30 PM",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskId: 404,
        title: "Email Campaign",
        description: "Launch email marketing campaign",
        date: "2025-01-14",
        time: "11:30 AM",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Karan",
    name: "Karan Mehta",
    email: "employee5@example.com",
    password: "123",

    taskNumber: 4,
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskId: 501,
        title: "Customer Support",
        description: "Handle customer support tickets",
        date: "2025-01-11",
        time: "09:30 AM",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskId: 502,
        title: "Bug Report",
        description: "Report UI issues",
        date: "2025-01-10",
        time: "01:30 PM",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskId: 503,
        title: "System Testing",
        description: "Test new feature deployment",
        date: "2025-01-08",
        time: "03:00 PM",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskId: 504,
        title: "User Feedback Review",
        description: "Analyze customer feedback",
        date: "2025-01-14",
        time: "04:00 PM",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    name: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
