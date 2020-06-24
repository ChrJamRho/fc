import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home.vue'


import ArmyStartPage from '../pages/armystuff/StartPage.vue';
import ArmySection1 from '../pages/armystuff/Section1.vue';
import ArmySection2 from '../pages/armystuff/Section2.vue';
import ArmySection3 from '../pages/armystuff/Section3.vue';

import MarineStartPage from '../pages/marinestuff/StartPage.vue';
import MarineSection1 from '../pages/marinestuff/Section1.vue';
import MarineSection2 from '../pages/marinestuff/Section2.vue';
import MarineSection3 from '../pages/marinestuff/Section3.vue';


const routes = [
    {
        path: '',
        title: 'Home',
        icon: 'home',
        component: MainLayout,
        children: [
          { path: '/', name: 'home', title: 'Home', component: Home, props: true },
        ]
    },
    {
        path: '/armystuff',
        title: 'Army Stuff',
        icon: 'layers',
        component: MainLayout,
        children: [
          { path: '/', title: 'Start Page', name: 'astartpage', component: ArmyStartPage, props: true },
          { path: '/section1', title: 'Section 1', name: 'asection1', component: ArmySection1, props: true },
          { path: '/section2', title: 'Section 2', name: 'asection2', component: ArmySection2, props: true },
          { path: '/section3', title: 'Section 3', name: 'asection3', component: ArmySection3, props: true }
        ]
    },
    {
        path: '/marinestuff',
        title: 'Marine Stuff',
        icon: 'money',
        component: MainLayout,
        children: [
          { path: '', title: 'Start Page', name: 'mstartpage', component: MarineStartPage, props: true },
          { path: '/section1', title: 'Section 1', name: 'msection1', component: MarineSection1, props: true },
          { path: '/section2', title: 'Section 2', name: 'msection2', component: MarineSection2, props: true },
          { path: '/section3', title: 'Section 3', name: 'msection3', component: MarineSection3, props: true }
        ]
    }
];

export default routes;