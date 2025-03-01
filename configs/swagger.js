import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const options ={
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "InterferAPI",
            version: "1.0.0",
            description: "",
            contact:{
                name: "Ethan Juarez",
                email: "ejuarez-2020269@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/interferApi/v1"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis:[
        "./src/user/user.routes.js",
        "./src/auth/auth.routes.js",
        "./src/category/category.routes.js",
        "./src/companies/companies.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi }