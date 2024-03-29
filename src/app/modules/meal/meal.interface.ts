import { Types } from 'mongoose';
import { IMealPlan } from '../mealPlan/mealPlan.interface';
import { ITrainer } from '../trainer/trainer.interface';

export type IMealCategories = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks';

export type IMeal = {
  meal_name: string;
  meal_cover?: string[];
  meal_category: IMealCategories;
  protein: string;
  carbs: string;
  fat: string;
  prep_time: string;
  ingredients: string[];
  mealPlan: Types.ObjectId | IMealPlan;
  trainer: Types.ObjectId | ITrainer;
};
export type IMealFilters = {
  searchTerm?: string;
  meal_name?: string;
  meal_category?: string;
};
