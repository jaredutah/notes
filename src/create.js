import * as uuid from 'uuid';
import handler from './util/handler';
import dynamoDb from './util/dynamodb';

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      // The attributes of the item to be created
      userId: '123', // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});

//noteId: eab2a810-a944-11ec-b9c2-37ef9c9febda

//GET - https://geuu1yrkik.execute-api.us-east-1.amazonaws.com/notes/eab2a810-a944-11ec-b9c2-37ef9c9febda
//LIST - curl https://geuu1yrkik.execute-api.us-east-1.amazonaws.com/notes
/*UPDATE - curl -X PUT \
-H 'Content-Type: application/json' \
-d '{"content":"New World","attachment":"new.jpg"}' \
https://geuu1yrkik.execute-api.us-east-1.amazonaws.com/notes/eab2a810-a944-11ec-b9c2-37ef9c9febda
*/
/*
DELETE - curl -X DELETE https://5bv7x0iuga.execute-api.us-east-1.amazonaws.com/notes/NOTE_ID
*/