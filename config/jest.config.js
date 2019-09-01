const jsonSerializer = require('enzyme-to-json/serializer');
const emotionSerializer = require('jest-emotion');

expect.addSnapshotSerializer(emotionSerializer);
expect.addSnapshotSerializer(jsonSerializer);
