import axios from 'axios';

const baseUrl = 'https://books-backend.p.goit.global/books/';

export async function getCategoryList() {
  try {
    const response = await axios.get(`${baseUrl}category-list`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getTopBooks() {
  try {
    const response = await axios.get(`${baseUrl}top-books`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategory(category) {
  try {
    const response = await axios.get(`${baseUrl}category?category=${category}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBookById(id) {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
