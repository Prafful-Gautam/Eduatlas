import { NbMenuItem } from '@nebular/theme';
import {PagesComponent} from './pages.component';
import { Title } from '@angular/platform-browser';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',             //0
    link: '/pages/home',
    home: true,
  },

  
 
  {
    title: 'Institute',
    icon: 'home-outline',             //1
    hidden: true,
    children: [
      {
        title: 'Add Institute',
        link: '/pages/membership',

      },
      {
        title: 'Manage Institute',
        link: '/pages/institute/manage-institute',
      },

    ]
  },
  
    {
    title: 'Dashboard',
    icon: 'layout-outline',               //2
    link: '',
    pathMatch: 'full',
    hidden: true
  },
  {
    title: 'Daily Links',
    hidden: true,                         //3
  },
  
  {
    title: 'Branch Configuration',
   
    icon:'share-outline',                       //4
    link: '/pages/institute/branch-config',
    hidden:true,
    children:[
      {
        title:'Courses',
        // children:[
        //   {
        //     title:'Add Course',
            // link:'/pages/institute/branch-config/add-courses'
          // },
          // {
          //   title:'Manage Courses',
            link:'/pages/institute/branch-config/manage-course'
          // }
        // ]
      },
     {
       title:'Batches',
      //  children:[
      //   {
      //     title:'Add Batches',
          // link:'/pages/institute/branch-config/add-batches'
      //   },
      //   {
      //     title:'Manage Batches',
          link:'/pages/institute/branch-config/manage-batch'
      //   }
      //  ]
     },
     {
       title:'Discount',
      //  children:[
      //   {
      //     title:'Add Discount',
          // link:'/pages/institute/branch-config/discount'
      //   },
      //   {
      //     title:'Manage Discount',
          link:'/pages/institute/branch-config/manage-discount'
      //   }
      //  ]
     },
      {
        title: 'Receipt',
        // children:[
        //   {
        //     title:'Add Receipt',
            // link:'/pages/institute/branch-config/receipt-conf'
        //   },
        //   {
        //     title:'Manage Receipt',
            link:'/pages/institute/branch-config/manage-receipt'
        //   }
        // ]
      },
      {
        title:'Role',
        // children:[
        //   {
        //     title:'Add Role',
            link:'/pages/institute/branch-config/role-management'
        //   },
        //   {
        //     title:'Manage Role',
        //   }
        // ]
      },
     
    ]
  },

  {
    title: 'Students',
 
    icon:'person-outline',
    hidden:true,                                                      //5
    children:[
      {
        title: 'Add Students',
        link: '/pages/institute/add-students'
      },
      {
        title: 'Active Student',
        link: '/pages/institute/manage-students'
      },
      {
        title: 'Pending Student',
        link: '/pages/institute/pending-students'
      }
    ]
  },
  {
    title: 'Communications',
    hidden: true,
    children:[
      {
        title: 'Announcements',
        link: ''
      },
      // {                                                             //6
      //   title: 'Chats'
      // },
      // {
      //   title: 'Forums'
      // },
      // {
      //   title: 'Logs'
      // }
    ]
  },

  {
    title: 'Tests',
    hidden: true,
    children:[
      {
        title: 'Define Test'
      },                                                        //7
      {
        title: 'Upload Scores'
      }

    ]
  },

  {
    title: 'Student Reports',
    hidden: true,
    children:[
      {
        title: 'Attendance Summary'
      },                                                            //8
      {
        title: 'Performance'
      },
      {
        title: 'Remarks'
      },
      {
        title: 'Mentoring'
      },
      {
        title: 'Schedule PTMs'
      }
    ]
  },

  {
    title: 'Reports',
    hidden: true,
    children:[
      {
        title: 'Finance reports'                              //9
      },
      {
        title: 'ETC'
      }
    ]
  },
 {
  title: 'LEAD MANAGER',                                    //10
  hidden: true
 },
 {
   title: 'Schedule',                                           //11
   link: '/pages/institute/add-schedule/1',
   hidden: true,
 },
 {
   title: 'Attendance',
   link: '',
   hidden: true                                          //12
 },

  
];
