import { Request, Response } from 'express';
import { productService } from './product.service';

import productValidationSchema from './product.validation';

const createproduct = async (req: Request, res: Response) => {
  try {
    //creating a schema validation using zod
    // validating the schema
    const { product: productData } = req.body;
    const zodiacsData = productValidationSchema.parse(productData);

    // will call service func to send this data
    const result = await productService.createProductIntoDB(zodiacsData);
    // send response

    res.status(200).json({
      success: true,
      message: 'product  created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: err,
    });
  }
};

const getAllproduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'All products fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleproduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: ' products fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  createproduct,
  getAllproduct,
  getSingleproduct,
};