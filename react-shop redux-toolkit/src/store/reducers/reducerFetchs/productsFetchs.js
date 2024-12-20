import { createAsyncThunk } from "@reduxjs/toolkit";

export let productsFetch = createAsyncThunk('content/productsFetch', async () => {
    let response = await fetch('http://localhost:5000/goods')
    let data = await response.json()
    return data
})