import { app } from './app'
import "dotenv/config"
import { prisma } from './prisma-client'


app.listen(process.env.PORT || 3000, () => {
        console.log(`Servidor executando na porta ${process.env.PORT}`)
})
