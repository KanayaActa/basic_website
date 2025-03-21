import Fastify from 'fastify';
import mysql from 'mysql2/promise';

const fastify = Fastify({ logger: true });

// DB接続テスト (環境変数から取得)
fastify.get('/health', async (request, reply) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'example',
      database: process.env.DB_NAME || 'my_database',
    });
    const [rows] = await connection.query('SELECT 1 + 1 AS test');
    return { status: 'ok', result: rows };
  } catch (err) {
    fastify.log.error(err);
    reply.code(500).send({ error: 'DB connection error' });
  }
});

// サーバ起動
const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    fastify.log.info('Server running on port 4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
