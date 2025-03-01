// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@bg-dev/nuxt-naiveui',
        '@sidebase/nuxt-auth'
    ],
    build: {
        transpile: [
            'trpc-nuxt'
        ]
    },
    typescript: {
        shim: false
    },
    auth: {
        globalAppMiddleware: true
    }
})
