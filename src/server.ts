import fastify, { FastifyInstance } from 'fastify'

const app: FastifyInstance = fastify({ logger: true })

app.listen(
  {
    port: 3333,
  },
  () => console.log('Server is running on port 3333'),
)
