import React, { useState } from "react";
import Card from "../../component/Card";
import ProductApi from "../../services/api/ProductApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// TODO: Continue integrate with BE
export const getAllUsers = createAsyncThunk("product/getAllProducts", async (_, { rejectWithValue }) => {
  try {
      const response = await ProductApi.getAllProduct();
      return response;
  } catch (error: any) {
      return rejectWithValue(error.response.data);
  }
});

const Product: React.FC = () => {
    const [students, setStudents] = useState(initialStudents);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const handleDelete = (id: string) => {
        setStudents(students.filter(student => student.id !== id));
    }

    const handleEdit = (id: string) => {
        // implement edit logic here
    }

    const pagination = () => {
        const start = (page - 1) * limit;
        const end = start + limit;
        return students.slice(start, end);
    }

    return (
      <div className="min-h-screen flex flex-col bg-white mx-auto p-4">
        <h1 className="text-3xl mt-8">Product List</h1>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            {pagination().map(student => (
              <Card key={student.id}>
                {/* Card content here */}
              </Card>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4 sticky bottom-0 bg-white py-4 z-10">
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="mx-4 my-auto">{page}</span>
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
            onClick={() => setPage(page + 1)}
            disabled={page * limit >= students.length}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

export default Product;
