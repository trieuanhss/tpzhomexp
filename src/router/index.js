import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Profile | TPZ-Tech Studio',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://tpz-tech.com'
          },
          {
            name: 'title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'description',
            content:
              "Trang profile của TPZ-Tech Studio"
          },
          {
            name: 'keywords',
            content: 'profile, TPZ-Tech Studio, game dev, web dev, mobile dev, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'TPZ-Tech Studio'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'application-name',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'twitter:description',
            content:
              "Trang profile của TPZ-Tech Studio"
          },
          {
            name: 'twitter:image',
            content: 'https://tpz-tech.com/img/logo-profile-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Profile TPZ-Tech Studio'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            property: 'og:description',
            content:
              "Trang profile của TPZ-Tech Studio"
          },
          {
            property: 'og:site_name',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            property: 'og:url',
            content: 'https://tpz-tech.com'
          },
          {
            property: 'og:image',
            content: 'https://tpz-tech.com/img/logo-profile-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Profile TPZ-Tech Studio'
          },
          {
            property: 'og:locale',
			content: 'vi_VN'
            
          },
          {
            property: 'og:locale:alternate',
			content: 'en_US'
            
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Profile | TPZ-Tech Studio',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://tpz-tech.com/office'
          },
          {
            name: 'title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'description',
            content:
              "Trang Profile của TPZ-Tech Studio"
          },
          {
            name: 'keywords',
            content: 'TPZ-Tech Studio, game dev, web dev, mobile dev, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'TPZ-Tech Studio'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'application-name',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'twitter:description',
            content:
              "Trang Profile của TPZ-Tech Studio"
          },
          {
            name: 'twitter:image',
            content: 'https://tpz-tech.com/img/logo-profile-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Profile TPZ-Tech Studio'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'og:description',
            content:
              "Trang Profile của TPZ-Tech Studio"
          },
          {
            name: 'og:site_name',
            content: 'Profile | TPZ-Tech Studio'
          },
          {
            name: 'og:url',
            content: 'https://tpz-tech.com/office'
          },
          {
            name: 'og:image',
            content: 'https://tpz-tech.com/img/logo-profile-black.webp'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Profile TPZ-Tech Studio'
          },
          {
            name: 'og:locale',
			content: 'vi_VN'
            
          },
          {
            name: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router
