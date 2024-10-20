

const employees = [
    {
        "Id": 1,
        "FirstName": "Aarav",
        "Email": "employee1@example.com",
        "Password": "123",
        "Tasks": [
            {
                "Title": "Prepare presentation",
                "Description": "Prepare the slides for the upcoming meeting.",
                "Date": "2024-10-21",
                "Category": "Work",
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false
            },
            {
                "Title": "Update website",
                "Description": "Add new content to the company website.",
                "Date": "2024-10-22",
                "Category": "Work",
                "Active": true,
                "NewTask": false,
                "Completed": true,
                "Failed": false
            },
            {
                "Title": "Team meeting",
                "Description": "Discuss project progress with the team.",
                "Date": "2024-10-23",
                "Category": "Meeting",
                "Active": false,
                "NewTask": false,
                "Completed": false,
                "Failed": true
            }
        ],
        "taskCount": { "Active": 2, "NewTask": 1, "Completed": 1, "Failed": 1 }
    },
    {
        "Id": 2,
        "FirstName": "Vivaan",
        "Email": "employee2@example.com",
        "Password": "123",
        "Tasks": [
            {
                "Title": "Client follow-up",
                "Description": "Follow up with the client about the project status.",
                "Date": "2024-10-24",
                "Category": "Communication",
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false
            },
            {
                "Title": "Budget review",
                "Description": "Review the budget for the current quarter.",
                "Date": "2024-10-25",
                "Category": "Finance",
                "Active": true,
                "NewTask": false,
                "Completed": true,
                "Failed": false
            },
            {
                "Title": "Schedule meeting",
                "Description": "Schedule a meeting with the marketing team.",
                "Date": "2024-10-26",
                "Category": "Meeting",
                "Active": false,
                "NewTask": false,
                "Completed": false,
                "Failed": true
            }
        ],
        "taskCount": { "Active": 2, "NewTask": 1, "Completed": 1, "Failed": 1 }
    },
    {
        "Id": 3,
        "FirstName": "Reyansh",
        "Email": "employee3@example.com",
        "Password": "123",
        "Tasks": [
            {
                "Title": "Prepare report",
                "Description": "Prepare the quarterly report.",
                "Date": "2024-10-27",
                "Category": "Work",
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false
            },
            {
                "Title": "Organize files",
                "Description": "Organize the files in the shared drive.",
                "Date": "2024-10-28",
                "Category": "Work",
                "Active": true,
                "NewTask": false,
                "Completed": true,
                "Failed": false
            },
            {
                "Title": "Team training",
                "Description": "Conduct a training session for the team.",
                "Date": "2024-10-29",
                "Category": "Training",
                "Active": false,
                "NewTask": false,
                "Completed": false,
                "Failed": true
            }
        ],
        "taskCount": { "Active": 2, "NewTask": 1, "Completed": 1, "Failed": 1 }
    },
    {
        "Id": 4,
        "FirstName": "Aanya",
        "Email": "employee4@example.com",
        "Password": "123",
        "Tasks": [
            {
                "Title": "Market research",
                "Description": "Conduct market research for the new product.",
                "Date": "2024-10-30",
                "Category": "Research",
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false
            },
            {
                "Title": "Update inventory",
                "Description": "Update the inventory records.",
                "Date": "2024-10-31",
                "Category": "Work",
                "Active": true,
                "NewTask": false,
                "Completed": true,
                "Failed": false
            },
            {
                "Title": "Customer feedback",
                "Description": "Collect customer feedback for the new product.",
                "Date": "2024-11-01",
                "Category": "Feedback",
                "Active": false,
                "NewTask": false,
                "Completed": false,
                "Failed": true
            }
        ],
        "taskCount": { "Active": 2, "NewTask": 1, "Completed": 1, "Failed": 1 }
    },
    {
        "Id": 5,
        "FirstName": "Diya",
        "Email": "employee5@example.com",
        "Password": "123",
        "Tasks": [
            {
                "Title": "Prepare budget",
                "Description": "Prepare the budget for the next project.",
                "Date": "2024-11-02",
                "Category": "Finance",
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false
            },
            {
                "Title": "Team building",
                "Description": "Organize a team-building event.",
                "Date": "2024-11-03",
                "Category": "Work",
                "Active": true,
                "NewTask": false,
                "Completed": true,
                "Failed": false
            },
            {
                "Title": "Client meeting",
                "Description": "Schedule a meeting with the client.",
                "Date": "2024-11-04",
                "Category": "Meeting",
                "Active": false,
                "NewTask": false,
                "Completed": false,
                "Failed": true
            }
        ],
        "taskCount": { "Active": 2, "NewTask": 1, "Completed": 1, "Failed": 1 }
    }
];


const admin = [
    {
        "Id": 1,
        "Email": "admin@example.com",
        "Password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }
    // console.log(employees)
    // console.log(admin)
}