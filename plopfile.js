module.exports = (plop) => {

    plop.setGenerator('Dumb component', {

        description: 'Create a new dumb component',

        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is your component name ?'
        }, {
            type: 'confirm',
            name: 'Impl',
            message: 'Suffix you component name with Impl ?'
        }, {
            type: 'input',
            name: 'path',
            message: (data) => `src/components/{path}/${data.name}${data.Impl ? 'Impl' : ''}.jsx\npath:`
        }, {
            type: 'confirm',
            name: 'scss',
            message: 'Fancy some scss ?'
        }],
        actions: (data) => {
            const actions = [{
                type: 'add',
                path: `src/components/${data.path}/${data.name}${data.Impl ? 'Impl' : ''}.jsx`,
                templateFile: 'plop-templates/DumbComponent.jsx'
            }]

            if (data.scss) {
                actions.push({
                    type: 'add',
                    path: `src/components/${data.path}/${data.name}.scss`,
                    templateFile: 'plop-templates/DumbComponent.scss'
                })
            }

            return actions
        }
    })

    plop.setGenerator('Smart component', {

        description: 'Create a new smart component',

        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is your component name ?'
        }, {
            type: 'input',
            name: 'path',
            message: (data) => `src/components/{path}/${data.name}.jsx\npath:`
        }],
        actions: (data) => [{
            type: 'add',
            path: `src/components/${data.path}/${data.name}.jsx`,
            templateFile: 'plop-templates/SmartComponent.jsx'
        }]
    })
}
