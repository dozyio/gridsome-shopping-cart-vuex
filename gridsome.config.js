// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome With Vuex Modules Shop',
    templates: {
        Product: '/:title'
    },
    plugins: [
        {
            // Create products from markdown files
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Product',
                path: './content/products/*.md'
            }
        }
    ],
}
