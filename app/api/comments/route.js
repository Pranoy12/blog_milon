
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export const POST = async (req,res) => {
    const { name, email, slug, comment} = req.body;
    console.log(req.body.name);
    // console.log({graphcmsToken});
    

    const graphQlClient = new GraphQLClient(graphqlAPI, {
        headers: {
            Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        },
    });

    // console.log(graphQlClient);

    const query = gql `
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
        createComment(
          data: {
            name: $name
            email: $email
            comment: $comment
            post: { connect: { slug: $slug } }
          }
        ) {
          id
        }
      }
    `;
    try{
        const result = await graphQlClient.request(query, req.body)

        return res.status(200).send(result);
        // res.json(result);
    }
    catch(error) {
        // console.log('hi');
        console.log(error);
        // return res.status(500).send('Internal Server error');
    }
}


// export const POST = async (req) => {
//     const { name, email, slug, comment} = req.body
//     console.log(name)
//     const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           query: `
//           mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
//             createComment(
//               data: {
//                 name: $name
//                 email: $email
//                 comment: $comment
//                 post: { connect: { slug: $slug } }
//               }
//             ) {
//               id
//             }
//           }
//             `,
//             variables: {
//                 name: name,
//                 email: email,
//                 comment: comment,
//                 slug: slug,
//               },
//         }),
//       });
//       const json = await response.json();

//       console.log(json.data);
    
//       return json.data;
// }
