export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61ff40758869353fad808fe2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tws4a3g7',
                  apiId: '1171eeba-c7bf-4393-85cf-6bc0cdced46a'
                },
                {
                  buildHookId: '61ff4076ccb6a1207b2c7937',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e2kskop8',
                  apiId: '3778fc8b-6fa0-49a8-88fd-c6154275030e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/makechinafreedom/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e2kskop8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
