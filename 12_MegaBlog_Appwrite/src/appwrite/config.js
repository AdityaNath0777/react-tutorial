import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket; // storage alias in appwrite

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // creating the post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service:: createPost :: error", error);
    }
  }

  // updating the post
  async updatePost(slug, { title, content, featuredImage, status }) {
    // as we're using slug so no need of getting userId
    try {
      return await this.databases.updateDocument(
        conf.appwriteURL,
        conf.appwriteDataBaseId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service:: updatePost :: error");
    }
  }

  // deleting the post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );

      return true;
    } catch (error) {
      console.log("Appwrite :: deletePost :: error ", error);
    }
  }

  // getting a single post
  // here we will Get a document by its <unique ID>
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
        // []     // Queries -> optional
      );
    } catch (error) {
      console.log("Appwrite :: getPost :: error ", error);
    }
  }

  // getting all the posts where status -> active
  // for that we will use some QUERIES

  async getPosts(queries = [Query.equal("status", ["active"])]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite :: getPosts :: error ", error);
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite :: uploadFile :: error ", error);
    }
  }
	
	// file delete service
  async deleteFile(fileID) {
    try {
      const result = this.bucket.deleteFile(conf.appwriteBucketId, fileID);

      return result; // whether upload is success or not
    } catch (error) {
      console.log("Appwrite :: deleteFile :: error ", error);
    }
  }

	// file preview service
  getFilePreview(fileID) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileID);
  }
}

const service = new Service();

export default service;
