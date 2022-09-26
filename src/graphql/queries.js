/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          content
          upvote
          downvote
          createdAt
          updatedAt
          channelPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      channel {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      upvote
      downvote
      createdAt
      updatedAt
      channelPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        channel {
          id
          name
          createdAt
          updatedAt
        }
        content
        comments {
          nextToken
        }
        upvote
        downvote
        createdAt
        updatedAt
        channelPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        channel {
          id
          name
          createdAt
          updatedAt
        }
        content
        comments {
          nextToken
        }
        upvote
        downvote
        createdAt
        updatedAt
        channelPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          content
          upvote
          downvote
          createdAt
          updatedAt
          channelPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
