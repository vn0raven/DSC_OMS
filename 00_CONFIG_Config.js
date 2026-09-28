/******************************************************
 * SYSTEM CONFIGURATION
 ******************************************************/


const CONFIG = {


SHEETS:{


USERS:"USERS",

TASKS:"TASKS",

TASK_ASSIGNMENTS:"TASK_ASSIGNMENTS",

REQUESTS:"REQUESTS",

APPROVALS:"APPROVALS",

LOGS:"ACTIVITY_LOG",

TASK_HISTORY:"TASK_HISTORY",

NOTIFICATIONS:"NOTIFICATIONS",

SETTINGS:"SETTINGS"


},




ROLES:{


LEAD:"Lead",

COLEAD:"Co-Lead",

EXECUTIVE:"Executive",

OFFICER:"Officer",

MEMBER:"Member"


},




ROLE_LEVELS:{


ADMIN:"Admin",

EXECUTIVE:"Executive",

OFFICER:"Officer",

MEMBER:"Member"


},




STATUS:{


PENDING:"Pending",

ONGOING:"Ongoing",

COMPLETED:"Completed",

APPROVED:"Approved",

REJECTED:"Rejected",

ARCHIVED:"Archived"


},




PRIORITY:{


CRITICAL:"Critical",

HIGH:"High",

MEDIUM:"Medium",

LOW:"Low"


},




REQUEST_STATUS:{


PENDING:"Pending",

APPROVED:"Approved",

REJECTED:"Rejected"


},




PERMISSIONS:{


CREATE_ALL_TASKS:[

"Lead",

"Co-Lead"

],



CREATE_DEPARTMENT_TASKS:[

"Executive"

],



ASSIGN_ALL_TASKS:[

"Lead",

"Co-Lead"

],



ASSIGN_DEPARTMENT_TASKS:[

"Executive"

],



DELETE_TASKS:[

"Lead",

"Co-Lead"

],



APPROVE_ALL_REQUESTS:[

"Lead",

"Co-Lead"

],



APPROVE_DEPARTMENT_REQUESTS:[

"Executive"

],



UPDATE_OWN_ASSIGNED_TASKS:[

"Executive",

"Officer",

"Member"

]


},




SYSTEM:{


NAME:"DSC USeP OMT System",

VERSION:"1.0"


}


};





/******************************************************
 * TASK DATABASE INDEX
 ******************************************************/


const TASK_IDX = {


ID:0,

TITLE:1,

DEPARTMENT:2,

PROJECT:3,

CREATED_BY:4,

PRIORITY:5,

START_DATE:6,

DEADLINE:7,

STATUS:8,

PROGRESS:9,

NOTES:10,

EVIDENCE:11,

CREATED_DATE:12,

UPDATED_DATE:13


};

