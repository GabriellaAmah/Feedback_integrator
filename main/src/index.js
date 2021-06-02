import app from "./shared/infra/http";
const path = process.env.GRAPHQL_SERVER_PATH;
const host = process.env.GRAPHQL_SERVER_HOST;
const port = process.env.PORT || 3000;
app.listen({ port, path }, () => {
    console.log(`Grahql started on http://${host}:${port}${path}`);
});
