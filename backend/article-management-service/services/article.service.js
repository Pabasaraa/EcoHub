import articleModel from "../models/article.model.js";

async function createArticle(item) {
  try {
    const newItem = new articleModel(item);
    return await newItem.save();
  } catch (error) {
    throw new Error("Error while creating item: " + error);
  }
}

async function getArticles() {
  try {
    return await articleModel.find();
  } catch (error) {
    throw new Error("Error while getting items: " + error);
  }
}

async function getArticleByAdminId(id) {
  try {
    return await articleModel.find({ adminId: id });
  } catch (error) {
    throw new Error("Error while getting items by user id: " + error);
  }
}

async function getArticlesById(id) {
  try {
    return await articleModel.findById(id);
  } catch (error) {
    throw new Error("Error while getting items by id: " + error);
  }
}

async function updateArticleById(id, item) {
  try {
    return await articleModel.findOneAndUpdate({ _id: id }, item);
  } catch (error) {
    throw new Error("Error while updating item by id: " + error);
  }
}

async function deleteArticleById(id) {
  try {
    return await articleModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error while deleting item by id: " + error);
  }
}

export default {
    createArticle,
    getArticles,
    getArticleByAdminId,
    getArticlesById,
    updateArticleById,
    deleteArticleById,
};
