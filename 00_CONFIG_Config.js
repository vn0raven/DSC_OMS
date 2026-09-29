/******************************************************
 * SYSTEM CONFIGURATION V2
 ******************************************************/


const CONFIG = {



SHEETS:{


USERS:"USERS",


TASKS:"TASKS",


TASK_ASSIGNMENTS:"TASK_ASSIGNMENTS",


TASK_HISTORY:"TASK_HISTORY",


ARCHIVE_TASKS:"ARCHIVE_TASKS",


REQUESTS:"REQUESTS",


APPROVALS:"APPROVALS",


LOGS:"ACTIVITY_LOG",


NOTIFICATIONS:"NOTIFICATIONS",


SETTINGS:"SETTINGS"


},






/******************************************************
 * USER ROLES
 ******************************************************/


ROLES:{


LEAD:"Lead",


COLEAD:"Co-Lead",


EXECUTIVE:"Executive",


OFFICER:"Officer",


MEMBER:"Member"


},






/******************************************************
 * ROLE LEVELS
 ******************************************************/


ROLE_LEVELS:{


ADMIN:"Admin",


EXECUTIVE:"Executive",


OFFICER:"Officer",


MEMBER:"Member"


},






/******************************************************
 * TASK STATUS FLOW
 ******************************************************/


STATUS:{


ASSIGNED:"Assigned",


ONGOING:"Ongoing",


FOR_REVIEW:"For Review",


COMPLETED:"Completed",


ARCHIVED:"Archived"



},






/******************************************************
 * PRIORITY
 ******************************************************/


PRIORITY:{


CRITICAL:"Critical",


HIGH:"High",


MEDIUM:"Medium",


LOW:"Low"


},






/******************************************************
 * REQUEST STATUS
 ******************************************************/


REQUEST_STATUS:{


PENDING:"Pending",


APPROVED:"Approved",


REJECTED:"Rejected"


},






/******************************************************
 * PERMISSIONS
 ******************************************************/


PERMISSIONS:{



/*
 Create tasks
*/


CREATE_ALL_TASKS:[

"Lead",

"Co-Lead"

],




CREATE_DEPARTMENT_TASKS:[

"Executive"

],




/*
 Assignment
*/


ASSIGN_ALL_TASKS:[

"Lead",

"Co-Lead"

],



ASSIGN_DEPARTMENT_TASKS:[

"Executive"

],






/*
 Task management
*/


DELETE_TASKS:[

"Lead",

"Co-Lead"

],






/*
 Review workflow
*/


REVIEW_ALL_TASKS:[

"Lead",

"Co-Lead"

],



REVIEW_DEPARTMENT_TASKS:[

"Executive"

],






/*
 Member updates
*/


UPDATE_ASSIGNED_TASKS:[

"Executive",

"Officer",

"Member"

]



},






/******************************************************
 * SYSTEM
 ******************************************************/


SYSTEM:{


NAME:"DSC USeP OMT System",


VERSION:"2.0"


}




};









/******************************************************
 * TASK DATABASE INDEX V2
 ******************************************************/


const TASK_IDX = {

ID:0,

TITLE:1,

DEPARTMENT:2,

PROJECT:3,

CREATED_BY:4,

ASSIGNED_TO:5,

PRIORITY:6,

START_DATE:7,

DEADLINE:8,

STATUS:9,

PROGRESS:10,

INSTRUCTIONS:11,

NOTES:12,

EVIDENCE:13,

SUBMITTED_DATE:14,

REVIEWED_BY:15,

REVIEW_NOTES:16,

CREATED_DATE:17,

UPDATED_DATE:18,

ARCHIVED_DATE:19

};